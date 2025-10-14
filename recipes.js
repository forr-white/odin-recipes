const SHEET_URL = "https://script.google.com/macros/s/AKfycbyQwqRvM39nmWPHP-92h4oJgfitIHFUrFfCC7M4hctKCWsll18tllozN2sh8DU5d0Y2vg/exec";

// Fetch data from Google Apps Script Web App
async function fetchRecipes() {
  try {
    const response = await fetch(SHEET_URL);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();

    // Normalize data keys
    return data.map(r => ({
      name: r.name?.trim() || "",
      category: r.category?.trim().toLowerCase() || "",
      cuisine: r.cuisine?.trim().toLowerCase() || "",
      tags: r.tags
        ? r.tags.split(",").map(t => t.trim().toLowerCase())
        : [],
      image: r["image url"] || r.image || "",
      link: r.link || "#"
    }));
  } catch (err) {
    console.error("Error fetching recipes:", err);
    return [];
  }
}

// Render recipes on the page
function displayRecipes(recipes) {
  const container = document.getElementById("recipesContainer");
  container.innerHTML = "";

  if (!recipes.length) {
    container.innerHTML = "<p>No recipes found.</p>";
    return;
  }

  recipes.forEach(r => {
    const div = document.createElement("div");
    div.className = "recipe-card"; // uniform card class
    div.innerHTML = `
      <a href="${r.link}" class="btn"><img src="${r.image}" alt="${r.name}" loading="lazy" /></a>
      <a href="${r.link}" class="btn"><h3>${r.name}</h3></a>
      <p>${r.category} | ${r.cuisine}</p>
    `;
    container.appendChild(div);
  });
}


// Populate filter dropdowns
function populateFilters(recipes) {
  const categorySet = new Set(recipes.map(r => r.category).filter(Boolean));
  const cuisineSet = new Set(recipes.map(r => r.cuisine).filter(Boolean));

  const categoryFilter = document.getElementById("filter-category");
  const cuisineFilter = document.getElementById("cuisineFilter");

  // Populate category dropdown
  categoryFilter.innerHTML = '<option value="">All Categories</option>';
  categorySet.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    categoryFilter.appendChild(opt);
  });

  // Populate cuisine dropdown
  cuisineFilter.innerHTML = '<option value="">All Cuisines</option>';
  cuisineSet.forEach(cui => {
    const opt = document.createElement("option");
    opt.value = cui;
    opt.textContent = cui.charAt(0).toUpperCase() + cui.slice(1);
    cuisineFilter.appendChild(opt);
  });
}

// Apply filters and search
function filterRecipes(recipes) {
  const category = document.getElementById("filter-category").value.toLowerCase();
  const cuisine = document.getElementById("cuisineFilter").value.toLowerCase();
  const tagSearch = document.getElementById("tagFilter").value.toLowerCase();
  const nameSearch = document.getElementById("search").value.toLowerCase();

  return recipes.filter(r => {
    const matchesCategory = !category || r.category === category;
    const matchesCuisine = !cuisine || r.cuisine === cuisine;
    const matchesTags = !tagSearch || r.tags.some(tag => tag.includes(tagSearch));
    const matchesName = !nameSearch || r.name.toLowerCase().includes(nameSearch);
    return matchesCategory && matchesCuisine && matchesTags && matchesName;
  });
}

// Initialize the recipe list
async function init() {
  const allRecipes = await fetchRecipes();
  populateFilters(allRecipes);
  displayRecipes(allRecipes);

  // Add live filtering
  document.querySelectorAll("#filter-category, #cuisineFilter, #tagFilter, #search")
    .forEach(el => el.addEventListener("input", () => {
      const filtered = filterRecipes(allRecipes);
      displayRecipes(filtered);
    }));
}

document.addEventListener("DOMContentLoaded", init);
