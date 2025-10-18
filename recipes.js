const SHEET_URL = "https://script.google.com/macros/s/AKfycbxnZGlirHNibP1tXTYL4oN1G7_FliKrjfmnDZrrIQ4WA4JCwS6BBqJwA4Ee_Hu3gbpf-Q/exec";

let allRecipes = [];
const recipesPerPage = 24;
let currentPage = parseInt(new URLSearchParams(window.location.search).get("page")) || 1;

async function fetchRecipes() {
  try {
    const response = await fetch(SHEET_URL);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();

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

function displayRecipes(recipes) {
  const container = document.getElementById("recipesContainer");
  container.innerHTML = "";

  if (!recipes.length) {
    container.innerHTML = "<p>No recipes found.</p>";
    return;
  }

  recipes.forEach(r => {
    const div = document.createElement("div");
    div.className = "recipe-card";
    div.innerHTML = `
      <a href="${r.link}" class="btn"><img src="${r.image}" alt="${r.name}" loading="lazy"></a>
      <a href="${r.link}" class="btn"><h3>${r.name}</h3></a>
      <p>${r.category} | ${r.cuisine}</p>
    `;
    container.appendChild(div);
  });
}

function filterRecipes(recipes) {
  const category = document.getElementById("filter-category").value.toLowerCase();
  const search = document.getElementById("searchCombined").value.toLowerCase();

  return recipes.filter(r => {
    const matchesCategory = !category || r.category === category;
    const matchesSearch =
      !search ||
      r.name.toLowerCase().includes(search) ||
      r.cuisine.toLowerCase().includes(search) ||
      r.tags.some(tag => tag.includes(search));
    return matchesCategory && matchesSearch;
  });
}

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

function updatePaginationControls(totalRecipes) {
  const totalPages = Math.ceil(totalRecipes / recipesPerPage);
  const pageNumbers = document.getElementById("pageNumbers");
  const prevBtn = document.getElementById("prevPage");
  const nextBtn = document.getElementById("nextPage");

  pageNumbers.innerHTML = "";

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;

  const maxVisible = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);
  if (endPage - startPage < maxVisible - 1) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = "page-btn";
    if (i === currentPage) btn.classList.add("active");
    btn.addEventListener("click", () => {
      currentPage = i;
      updateDisplay(true);
    });
    pageNumbers.appendChild(btn);
  }
}

function updateDisplay(pushState = false) {
  const filtered = filterRecipes(allRecipes);
  const sorted = sortRecipes(filtered, document.getElementById("sortSelect").value);

  const start = (currentPage - 1) * recipesPerPage;
  const end = start + recipesPerPage;
  const paginated = sorted.slice(start, end);

  displayRecipes(paginated);
  updatePaginationControls(filtered.length);

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (pushState) {
    const url = new URL(window.location);
    url.searchParams.set("page", currentPage);
    window.history.pushState({}, "", url);
  }
}

function setupPagination() {
  const prevBtn = document.getElementById("prevPage");
  const nextBtn = document.getElementById("nextPage");

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updateDisplay(true);
    }
  });

  nextBtn.addEventListener("click", () => {
    const totalRecipes = filterRecipes(allRecipes).length;
    const totalPages = Math.ceil(totalRecipes / recipesPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      updateDisplay(true);
    }
  });
}

function populateFilters(recipes) {
  const categorySet = new Set(recipes.map(r => r.category).filter(Boolean));
  const categoryFilter = document.getElementById("filter-category");

  categoryFilter.innerHTML = '<option value="">All Categories</option>';
  categorySet.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    categoryFilter.appendChild(opt);
  });
}

const backToTopBtn = document.getElementById("backToTopBtn");
function handleScroll() {
  if (window.scrollY > 200 || window.pageYOffset > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

async function init() {
  allRecipes = await fetchRecipes();
  populateFilters(allRecipes);
  updateDisplay();
  setupPagination();

  document.querySelectorAll("#filter-category, #searchCombined, #sortSelect")
    .forEach(el => el.addEventListener("input", () => {
      currentPage = 1;
      updateDisplay(true);
    }));

  window.addEventListener("scroll", handleScroll);
}

document.addEventListener("DOMContentLoaded", init);
