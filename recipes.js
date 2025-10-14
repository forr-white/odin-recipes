<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.4.1/papaparse.min.js"></script>

const SHEET_URL = "https://script.google.com/macros/s/AKfycbw1ts-AqJowBQlXEaCLA1ZPJWN9MmuMkBVxVB-77-z6uA31RcZS4bQFpLeeB4SwMI21Yw/exec";

async function fetchRecipes() {
  const res = await fetch(SHEET_URL);
  const csv = await res.text();

  const parsed = Papa.parse(csv, { header: true, skipEmptyLines: true });
  console.log("Parsed CSV:", parsed.data); // 👈 check this in console

  return parsed.data.map(r => ({
    name: r.name?.trim() || "",
    category: r.category?.trim() || "",
    cuisine: r.cuisine?.trim() || "",
    tags: r.tags ? r.tags.split(',').map(t => t.trim()) : [],
    image: r["image url"]?.trim() || "",
    link: r.link?.trim() || "",
    date: r.date?.trim() || ""
  }));
}

function createTagChips(tags) {
  return tags.map(t => `<span class="tag-chip">${t}</span>`).join(" ");
}

function displayRecipes(recipes) {
  const container = document.getElementById("recipesContainer");
  container.innerHTML = "";

  if (!recipes.length) {
    container.innerHTML = "<p>No recipes found.</p>";
    return;
  }

  recipes.forEach(r => {
    const div = document.createElement("div");
    div.className = "info-item";
    div.innerHTML = `
      <div class="card">
        ${r.image ? `<img src="${r.image}" alt="${r.name}" style="width:100%; height:100%; object-fit:cover; border-radius:8px;">` : ""}
      </div>
      <h3>${r.name}</h3>
      <p><strong>Category:</strong> ${r.category} | <strong>Cuisine:</strong> ${r.cuisine}</p>
      <p class="tags">${createTagChips(r.tags)}</p>
      ${r.link ? `<p><a href="${r.link}" target="_blank">View Recipe</a></p>` : ""}
    `;
    container.appendChild(div);
  });
}

async function populateFilters(recipes) {
  const categories = [...new Set(recipes.map(r => r.category).filter(c => c))];
  const cuisines = [...new Set(recipes.map(r => r.cuisine).filter(c => c))];

  const categoryFilter = document.getElementById("filter-category");
  const cuisineFilter = document.getElementById("cuisineFilter");

  categoryFilter.innerHTML = '<option value="">All Categories</option>';
  categories.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    categoryFilter.appendChild(opt);
  });

  cuisineFilter.innerHTML = '<option value="">All Cuisines</option>';
  cuisines.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    cuisineFilter.appendChild(opt);
  });
}

async function filterRecipes() {
  const category = document.getElementById("filter-category").value;
  const cuisine = document.getElementById("cuisineFilter").value;
  const tag = document.getElementById("tagFilter").value.toLowerCase();
  const nameSearch = document.getElementById("search").value.toLowerCase();

  const recipes = await fetchRecipes();
  const filtered = recipes.filter(r =>
    (!category || r.category === category) &&
    (!cuisine || r.cuisine === cuisine) &&
    (!tag || r.tags.some(t => t.toLowerCase().includes(tag))) &&
    (!nameSearch || r.name.toLowerCase().includes(nameSearch))
  );

  displayRecipes(filtered);
}

document.getElementById("filter-category").addEventListener("change", filterRecipes);
document.getElementById("cuisineFilter").addEventListener("change", filterRecipes);
document.getElementById("tagFilter").addEventListener("input", filterRecipes);
document.getElementById("search").addEventListener("input", filterRecipes);

(async () => {
  const recipes = await fetchRecipes();
  console.log("Recipes loaded:", recipes); // 👈 check this
  populateFilters(recipes);
  displayRecipes(recipes);
})();

