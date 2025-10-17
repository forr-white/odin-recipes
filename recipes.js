const SHEET_URL = "https://script.google.com/macros/s/AKfycbxnZGlirHNibP1tXTYL4oN1G7_FliKrjfmnDZrrIQ4WA4JCwS6BBqJwA4Ee_Hu3gbpf-Q/exec";

let allRecipes = [];
let displayedRecipes = [];
let visibleCount = 24; // how many to show at once

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
      link: r.link || "#",
      date: r.date || "" // use your actual sheet column for sorting
    }));
  } catch (err) {
    console.error("Error fetching recipes:", err);
    return [];
  }
}

// Render recipes on the page
function displayRecipes(recipes) {
  const container = document.getElementById("recipesContainer");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  container.innerHTML = "";

  if (!recipes.length) {
    container.innerHTML = "<p>No recipes found.</p>";
    loadMoreBtn.style.display = "none";
    return;
  }

  // Determine how many to show
  const toDisplay = recipes.slice(0, visibleCount);
  displayedRecipes = toDisplay;

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

  // Toggle "Load More" visibility
  if (recipes.length > visibleCount) {
    loadMoreBtn.style.display = "block";
  } else {
    loadMoreBtn.style.display = "none";
  }// Toggle "Load More" visibility
  if (recipes.length > visibleCount) {
    loadMoreBtn.style.display = "block";
  } else {
    loadMoreBtn.style.display = "none";
  }
}

// Populate filter dropdowns
function populateFilters(recipes) {
  const categorySet = new Set(recipes.map(r => r.category).filter(Boolean));
  const cuisineSet = new Set(recipes.map(r => r.cuisine).filter(Boolean));

  const categoryFilter = document.getElementById("filter-category");
  const cuisineFilter = document.getElementById("cuisineFilter");

  categoryFilter.innerHTML = '<option value="">All Categories</option>';
  categorySet.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    categoryFilter.appendChild(opt);
  });

  cuisineFilter.innerHTML = '<option value="">All Cuisines</option>';
  cuisineSet.forEach(cui => {
    const opt = document.createElement("option");
    opt.value = cui;
    opt.textContent = cui.charAt(0).toUpperCase() + cui.slice(1);
    cuisineFilter.appendChild(opt);
  });
}

// Filter recipes based on search + dropdowns
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


// Sort recipes
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
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date)); // use the sheet's 'date' column
      break;
  }
  return sorted;
}

// Update the visible recipes
function updateDisplay() {
  const filtered = filterRecipes(allRecipes);
  const sortValue = document.getElementById("sortSelect").value;
  const sorted = sortRecipes(filtered, sortValue);
  displayRecipes(sorted);
}

// Initialize everything
async function init() {
  allRecipes = await fetchRecipes();
  populateFilters(allRecipes);
  displayRecipes(allRecipes);

  // Load more button
  document.getElementById("loadMoreBtn").addEventListener("click", () => {
    visibleCount += 24;
    const filtered = filterRecipes(allRecipes);
    displayRecipes(filtered);
  });

  // Filters, search, and sorting
  document.querySelectorAll("#filter-category, #cuisineFilter, #searchCombined, #sortSelect")
    .forEach(el => el.addEventListener("input", () => {
      visibleCount = 24; // reset on filter/sort/search change
      const filtered = filterRecipes(allRecipes);
      displayRecipes(filtered);
    }));
}

document.addEventListener("DOMContentLoaded", init);
