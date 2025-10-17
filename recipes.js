const SHEET_URL = "https://script.google.com/macros/s/AKfycbxnZGlirHNibP1tXTYL4oN1G7_FliKrjfmnDZrrIQ4WA4JCwS6BBqJwA4Ee_Hu3gbpf-Q/exec";

let allRecipes = [];
let visibleCount = 24;

// Fetch data
async function fetchRecipes() {
  try {
    const response = await fetch(SHEET_URL);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();

    // Normalize data
    return data.map(r => ({
      name: r.name?.trim() || "",
      category: r.category?.trim().toLowerCase() || "",
      cuisine: r.cuisine?.trim().toLowerCase() || "",
      tags: r.tags ? r.tags.split(",").map(t => t.trim().toLowerCase()) : [],
      image: r["image url"] || r.image || "",
      link: r.link || "#",
      date: r.date || ""
    }));
  } catch (err) {
    console.error("Error fetching recipes:", err);
    return [];
  }
}

// Render recipes
function displayRecipes(recipes) {
  const container = document.getElementById("recipesContainer");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  container.innerHTML = "";

  if (!recipes.length) {
    container.innerHTML = "<p>No recipes found.</p>";
    loadMoreBtn.style.display = "none";
    return;
  }

  const toDisplay = recipes.slice(0, visibleCount);

  toDisplay.forEach(r => {
    const div = document.createElement("div");
    div.className = "recipe-card";
    div.innerHTML = `
      <a href="${r.link}" class="btn"><img src="${r.image}" alt="${r.name}" loading="lazy" /></a>
      <a href="${r.link}" class="btn"><h3>${r.name}</h3></a>
      <p>${r.category} | ${r.cuisine}</p>
    `;
    container.appendChild(div);
  });

  // Show/hide Load More
  loadMoreBtn.style.display = recipes.length > visibleCount ? "block" : "none";
}

// Filters
function filterRecipes(recipes) {
  const category = document.getElementById("filter-category").value.toLowerCase();
  const cuisine = document.getElementById("cuisineFilter").value.toLowerCase();
  const search = document.getElementById("searchCombined").value.toLowerCase();

  return recipes.filter(r => {
    const matchesCategory = !category || r.category === category;
    const matchesCuisine = !cuisine || r.cuisine === cuisine;
    const matchesSearch =
      !search ||
      r.name.toLowerCase().includes(search) ||
      r.tags.some(tag => tag.includes(search));
    return matchesCategory && matchesCuisine && matchesSearch;
  });
}

// Sorting
function sortRecipes(recipes, criteria) {
  const sorted = [...recipes];
  switch (criteria) {
    case "name":
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "cuisine":
      sorted.sort((a, b) => a.cuisine.localeCompare(b.cuisine));
      break;
    case "category":
      sorted.sort((a, b) => a.category.localeCompare(b.category));
      break;
    case "recent":
    default:
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
  }
  return sorted;
}

// Combined update handler
function updateDisplay() {
  const filtered = filterRecipes(allRecipes);
  const sortValue = document.getElementById("sortSelect").value;
  const sorted = sortRecipes(filtered, sortValue);
  displayRecipes(sorted);
}

// Initialize
async function init() {
  allRecipes = await fetchRecipes();
  populateFilters(allRecipes);
  updateDisplay(); // ensure initial sort is applied

  // Load more button
  document.getElementById("loadMoreBtn").addEventListener("click", () => {
    visibleCount += 24;
    updateDisplay();
  });

  // Filters, search, sort
  document.querySelectorAll("#filter-category, #cuisineFilter, #searchCombined, #sortSelect")
    .forEach(el => el.addEventListener("input", () => {
      visibleCount = 24;
      updateDisplay();
    }));
}

document.addEventListener("DOMContentLoaded", init);
