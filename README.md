# Odin Recipes

Welcome to **Odin Recipes**! This project provides a simple interface for browsing and managing recipes.

## Getting Started

1. **Download the base code:**  
    Obtain the starter files from the source provided.

2. **Set up your project:**  
    Extract the files to your desired location.

3. **Open the interface:**  
    Open `index.html` in your web browser.

4. **Viewing Recipes:**  
    On the homepage, you will see a list of recipes. Each recipe is displayed as a clickable link, for example:
    ```
    - [Spaghetti Carbonara](recipes/spaghetti-carbonara.html)
    - [Chicken Alfredo](recipes/chicken-alfredo.html)
    - [Vegetable Stir Fry](recipes/vegetable-stir-fry.html)
    ```
    Click any recipe name to view its details.

## Using the Interface

- **Browse Recipes:**  
  The homepage lists available recipes. Click on any recipe to view details.

- **Add a Recipe:**  
  Use the "Add Recipe" button to submit a new recipe. Fill in the required fields and save to the `recipes/` folder.

  navigate to recipes.js and fill out the information like below

    { 
    name: "5 Layer Dip", 
    category: "appetizers", 
    cuisine: "Mexican-American", 
    tags: ["party food", "game day", "easy", "vegetarian"], 
    url: "../odin-recipes/recipes/five-layer-dip.html", 
    image: "https://www.allrecipes.com/thmb/eTXLWRUc-J9lIjjwiKoQnv5yz8E=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2345875-layer-mexican-dipSoupLovingNicolex3-d286026cbfb44bf8a164ea9bcd077f42.jpg"
  },

## Loading Recipes

- **Manual Addition:**  
  Add recipes through the interface as described above.

- **Custom Recipes:**  
  To add recipes manually, create new HTML files in the `recipes/` folder following the existing format.

- **Browser Support**
    To be able to see recipes on mobile devices, you will need to download a coding platform on your computer, such as VS Code, and have a github account to submit commits to.