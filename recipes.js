// ===== Recipe Data =====
// Example recipe entries. Add your own here.
const recipes = [
  { name: "5 Layer Dip", category: "appetizers", url: "../odin-recipes/recipes/five-layer-dip.html", image: "https://www.allrecipes.com/thmb/eTXLWRUc-J9lIjjwiKoQnv5yz8E=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2345875-layer-mexican-dipSoupLovingNicolex3-d286026cbfb44bf8a164ea9bcd077f42.jpg"},
  { name: "Authentic Mexican Rice", category: "sides", url: "../odin-recipes/recipes/authentic-mexican-rice.html", image: "https://www.giftofhospitality.com/wp-content/uploads/2018/09/mexican-rice-4-1024x683.jpg" },
  { name: "Beef Carne Guisada", category: "dinner", url: "../odin-recipes/recipes/beef-carne-guisada.html", image: "https://raw.githubusercontent.com/forr-white/odin-recipes/refs/heads/main/images/carneguisada.png" },
  { name: "Best Lemon Garlic Shrimp", category: "dinner", url: "../odin-recipes/recipes/lemon-garlic-shrimp.html", image: "https://topteenrecipes.com/wp-content/uploads/2023/06/Best-Lemon-Garlic-Shrimp-Recipe6-720x1080.jpg" },
  { name: "Biscuits and Gravy Cassarole", category: "breakfast", url: "../odin-recipes/recipes/biscuits-and-gravy-casserole.html", image: "https://theforkedspoon.com/wp-content/uploads/2025/09/biscuits-and-gravy-casserole-finished-700x1050.jpg" },
  { name: "Black-Eyed Peas with Bacon and Pork", category: "sides", url: "../odin-recipes/recipes/black-eyed-peas.html", image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/6/24/1/NY0701_Black-Eyed-Peas-with-Bacon-and-Pork_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1371593540909.webp" },
  { name: "Bloody Mary Coctails", category: "drinks", url: "../odin-recipes/recipes/bloody-marys.html", image: "https://www.foodiecrush.com/wp-content/uploads/2014/05/Best-Bloody-Mary-foodiecrush.com-036.jpg" },
  { name: "Bloody Mary Mix", category: "drinks", url: "../odin-recipes/recipes/bloody-mary-mix.html", image: "https://www.foodiecrush.com/wp-content/uploads/2014/05/Best-Bloody-Mary-foodiecrush.com-032.jpg" },
  { name: "Blueberry Muffins with Streusel Crumb Topping", category: "desserts", url: "../odin-recipes/recipes/blueberry-muffins.html", image: "https://omgchocolatedesserts.com/wp-content/uploads/2014/05/Best-Ever-Blueberry-Muffins-Recipe.jpg" },
  { name: "Braised Beef Short Ribs", category: "dinner", url: "../odin-recipes/recipes/braised-beef-short-ribs.html", image: "https://veronikaskitchen.com/wp-content/uploads/2022/01/Red-Wine-Braised-Short-Ribs-4682.webp" },
  { name: "Buffalo Chicken Dip", category: "appetizers", url: "../odin-recipes/recipes/buffalo-chicken-dip.html", image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F07%2F27%2F5215622-cheesy-buffalo-chicken-dip-AllrecipesPhoto-1x1-1.jpg&q=60&c=sc&poi=auto&orient=true&h=512" },
  { name: "Buttery Flour Tortillas", category: "bread", url: "../odin-recipes/recipes/buttery-flour-tortillas.html", image: "https://landenkerr.com/wp-content/uploads/2020/03/homemade-butter-tortilla-recipe-tortilla-stack-1200x1500.jpeg" },
  { name: "Carne Asada Street Tacos", category: "dinner", url: "../odin-recipes/recipes/carne-asada.html", image: "" },
  { name: "Carne Guisada", category: "dinner", url: "../odin-recipes/recipes/carne-guisada.html", image: "" },
  { name: "Cheesecake", category: "desserts", url: "../odin-recipes/recipes/cheesecake.html", image: "https://github.com/forr-white/odin-recipes/blob/main/images/cheesecake.jpg?raw=true" },
  { name: "Chicken Tikka Masala", category: "dinner", url: "../odin-recipes/recipes/chicken-tikka-masala.html", image: "https://bellyfull.net/wp-content/uploads/2021/05/Chicken-Tikka-Masala-blog-3-768x1024.jpg" },
  { name: "Chimichurri", category: "sauce", url: "../odin-recipes/recipes/chimichurri.html", image: "https://theforkedspoon.com/wp-content/uploads/2019/01/Chimichurri-4.jpg" },
  { name: "Chipotle Ranch", category: "sauce", url: "../odin-recipes/recipes/chipotle-ranch.html", image: "https://www.isabeleats.com/wp-content/uploads/2025/07/chipotle-ranch-25-small-7.jpg" },
  { name: "Chow Mein", category: "sides", url: "../odin-recipes/recipes/chow-mein.html", image: "" },
  { name: "Chorizo and Eggs", category: "breakfast", url: "../odin-recipes/recipes/chorizo-eggs.html", image: "https://www.isabeleats.com/wp-content/uploads/2024/02/chorizo-and-eggs-b-small-8.jpg" },
  { name: "Classic Tres Leches Cake", category: "desserts", url: "../odin-recipes/recipes/tres-leches.html", image: "https://tastesbetterfromscratch.com/wp-content/uploads/2017/04/Tres-Leches-Cake-1-1.jpg" },
  { name: "Creamy Green Salsa", category: "sauce", url: "../odin-recipes/recipes/creamy-green-salsa.html", image: "" },
  { name: "Creole Succotash from Treme", category: "dinner", url: "../odin-recipes/recipes/creole-succotash.html", image: "https://www.seriouseats.com/thmb/NsuAemKKH014qDL-eghQsy8cSEk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2013__08__080613-261664-cook-the-book-creole-succotash-8293cc7c6ce74a03a7cf463b5254aa82.jpg" },
  { name: "Cucumber Lime Agua Fresca", category: "drinks", url: "../odin-recipes/recipes/cucumber-lime-agua-fresca.html", image: "https://everydaylatina.com/wp-content/uploads/2022/06/IMG_1479-683x1024.jpg" },
  { name: "Easy Healthy Taco Rice Bowl", category: "dinner", url: "../odin-recipes/recipes/taco-rice-bowl.html", image: "file:///home/forrest-white/repos/odin-recipes/images/tacobowl.jpg" },
  { name: "Egg White Bites", category: "breakfast", url: "../odin-recipes/recipes/egg-white-bites.html", image: "https://feastytravels.com/wp-content/uploads/2023/02/Healthy-Starbucks-Egg-White-Bites-Recipe.jpg" },
  { name: "Filipino Chicken Adobo", category: "dinner", url: "../odin-recipes/recipes/filipino-chicken-adobo.html", image: "https://www.recipetineats.com/tachyon/2015/02/Filipino-Chicken-Adobo_7.jpg?resize=900%2C1260&zoom=1" },
  { name: "Focaccia Bread", category: "bread", url: "../odin-recipes/recipes/focaccia-bread.html", image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/12/foccacia-recipe-580x856.jpg" },
  { name: "Fried Cabbage", category: "sides", url: "../odin-recipes/recipes/fried-cabbage.html", image: "" },
  { name: "Fresh Lime Margarita", category: "drinks", url: "../odin-recipes/recipes/fresh-lime-margarita.html", image: "" },
  { name: "Gains Protein Bowl", category: "dinner", url: "../odin-recipes/recipes/gains-protein-bowl.html", image: "" },
  { name: "Garlic Mashed Potatoes", category: "sides", url: "../odin-recipes/recipes/garlic-mashed-potatoes.html", image: "" },
  { name: "General Tso Chicken", category: "dinner", url: "../odin-recipes/recipes/general-tso-chicken.html", image: "" },
  { name: "Golden Sweet Cornbread", category: "bread", url: "../odin-recipes/recipes/cornbread.html", image: "https://www.allrecipes.com/thmb/ogdc1HqUZDAJH7iqGHljK7mx7-c=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/17891-golden-sweet-cornbread-ddmfs-beauty-4x3-BG-25990-bcabebac0323419abdf0497ee3383003.jpg" },
  { name: "Goulash", category: "dinner", url: "../odin-recipes/recipes/goulash.html", image: "https://hips.hearstapps.com/hmg-prod/images/goulash-lead-64de8d20c2d14.jpg?crop=1xw:1xh;center,top&resize=640:*" },
  { name: "Greek Chickpea Salad", category: "sides", url: "../odin-recipes/recipes/greek-chickpea-salad.html", image: "https://therecipeshome.com/wp-content/uploads/2025/08/0_1-1754797142551.webp" },
  { name: "Ground Beef Tostadas with Refried Beans", category: "dinner", url: "../odin-recipes/recipes/ground-beef-tostadas-with-refried-beans.html", image: "https://everydaylatina.com/wp-content/uploads/2023/04/Tostadas-de-Carne-Molida-bottom-image-1200px.jpg" },
  { name: "High Protein Potato Bowls", category: "dinner", url: "../odin-recipes/recipes/high-protein-potato-bowls.html", image: "" },
  { name: "Homemade Caesar Dressing", category: "sauce", url: "../odin-recipes/recipes/caesar-dressing.html", image: "https://www.onceuponachef.com/images/2010/08/caesar-salad-3-1-760x514.jpg" },
  { name: "Homemade Chicken and Dumplings", category: "soups", url: "../odin-recipes/recipes/chicken-and-dumplings.html", image: "https://thenovicechefblog.com/wp-content/uploads/2023/12/Best-Chicken-and-Dumplings-Recipe-768x1152.jpeg" },
  { name: "Homemade Chili", category: "soups", url: "../odin-recipes/recipes/homemade-chili.html", image: "" },
  { name: "Homemade Corn Tortillas", category: "bread", url: "../odin-recipes/recipes/homemade-corn-tortillas.html", image: "https://www.mexicanplease.com/wp-content/uploads/2016/03/Stack-of-homemade-corn-tortillas-on-towel.jpg" },
  { name: "Homemade Rolls", category: "bread", url: "../odin-recipes/recipes/rolls.html", image: "https://joyfoodsunshine.com/wp-content/uploads/2018/10/best-homemade-dinner-rolls-recipe-6.jpg" },
  { name: "Homemade Sourdough Pizza Crust", category: "bread", url: "../odin-recipes/recipes/homemade-sourdough-pizza-crust.html", image: "https://www.farmhouseonboone.com/wp-content/uploads/2022/10/sourdough-pizza-13-300x300.jpg" },
  { name: "Honey-Lime Grilled Chicken", category: "dinner", url: "../odin-recipes/recipes/honey-lime-grilled-chicken.html", image: "https://thecafesucrefarine.com/wp-content/uploads/2019/07/Honey-Lime-Grilled-Chicken-5-600x600.jpg" },
  { name: "Instant Pot Crack Chicken", category: "dinner", url: "../odin-recipes/recipes/instant-pot-crack-chicken.html", image: "https://diethood.com/wp-content/uploads/2019/01/Instant-Pot-Crack-Chicken-9.jpg" },
  { name: "Jalapeño Cream Gravy", category: "sauce", url: "../odin-recipes/recipes/jalapeno-cream-gravy.html", image: "" },
  { name: "Jalapeno Margarita", category: "drinks", url: "../odin-recipes/recipes/jalapeno-margarita.html", image: "" },
  { name: "Jalapeno Popper Loaded Potatoes", category: "sides", url: "../odin-recipes/recipes/jalapeno-popper-potatoes.html", image: "" },
  { name: "La Ninfa's Green Sauce", category: "sauce", url: "../odin-recipes/recipes/la-ninfas-green-sauce.html", image: "https://www.homesicktexan.com/wp-content/uploads/2007/01/Ninfas-green-sauce-DSC1981-1024x680.jpg.webp" },
  { name: "Lemon Garlic Pasta with Fresh Veggies", category: "dinner", url: "../odin-recipes/recipes/lemon-garlic-pasta.html", image: "https://skinnyms.com/wp-content/uploads/2016/01/Lemon-Garlic-Pasta-with-Fresh-Veggies.jpg" },
  { name: "Mashed Potatoes", category: "sides", url: "../odin-recipes/recipes/mashed-potatoes.html", image: "" },
  { name: "Mexican Grilled Chicken", category: "dinner", url: "../odin-recipes/recipes/mexican-grilled-chicken.html", image: "https://thedizzycook.com/wp-content/uploads/2022/06/mexican-grilled-chicken-300x300.jpg" },
  { name: "Mississippi Pot Roast", category: "dinner", url: "../odin-recipes/recipes/mississippi-pot-roast.html", image: "https://www.thecountrycook.net/wp-content/uploads/2015/04/Mississippi-Pot-Roast-1-515x711.jpg" },
  { name: "Mongolian Beef", category: "dinner", url: "../odin-recipes/recipes/mongolian-beef.html", image: "" },
  { name: "No-Knead Crusty Artisan Bread", category: "bread", url: "../odin-recipes/recipes/artisan-bread.html", image: "https://www.thecomfortofcooking.com/wp-content/uploads/2013/04/NoKneadCrustyArtisanBread5.jpg"},
  { name: "Pepper Steak Stir Fry", category: "dinner", url: "../odin-recipes/recipes/pepper-steak.html", image: "" },
  { name: "Picadillo", category: "dinner", url: "../odin-recipes/recipes/picadillo.html", image: "file:///home/forrest-white/repos/odin-recipes/images/picadillo.png" },
  { name: "Pineapple Upside Down Cake", category: "desserts", url: "../odin-recipes/recipes/pineapple-upside-down-cake.html", image: "https://theforkedspoon.com/wp-content/uploads/2024/10/Pineapple-Upside-Down-Cake-2-700x700.jpg" },
  { name: "Pinto Beans", category: "sides", url: "../odin-recipes/recipes/pinto-beans.html", image: "https://thecaglediaries.com/wp-content/uploads/2020/11/crock-pot-pinto-beans-hero-2.jpg" },
  { name: "Pinto Beans for Refried Beans", category: "sides", url: "../odin-recipes/recipes/pinto-refried-beans.html", image: "" },
  { name: "Potato Soup", category: "soups", url: "../odin-recipes/recipes/potato-soup.html", image: "" },
  { name: "Red Lobster Cheddar Bay Biscuits", category: "bread", url: "../odin-recipes/recipes/cheddar-bay-biscuits.html", image: "https://www.spendwithpennies.com/wp-content/uploads/2025/07/1200-Red-Lobster-Cheddar-Bay-Biscuits-2-SpendWithPennies.jpg" },
  { name: "Red Chili Sauce", category: "sauce", url: "../odin-recipes/recipes/red-chili-sauce.html", image: "" },
  { name: "Restaurant Style Mexican Salsa", category: "sauce", url: "../odin-recipes/recipes/restaurant-style-mexican-salsa.html", image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/05/salsa-roja-1-580x840.jpg" },
  { name: "Rigatoni with Sausage, Tomatoes, and Zucchini", category: "dinner", url: "../odin-recipes/recipes/sausage-rigatoni.html", image: "https://bakerbynature.com/wp-content/uploads/2019/07/rigatoni-with-sausage-tomatoes-and-zucchini-1-of-1.jpg" },
  { name: "Roasted Vegetable Salsa", category: "sauce", url: "../odin-recipes/recipes/roasted-vegetable-salsa.html", image: "https://preview.redd.it/i-just-made-my-first-ever-homemade-mexican-street-tacos-and-v0-64yq5vw2knve1.jpg?width=640&crop=smart&auto=webp&s=cbec9e9e149d51ccea7efff91ef63a3f3eb1502d" },
  { name: "Royal Icing", category: "desserts", url: "../odin-recipes/recipes/royal-icing.html", image: "" },
  { name: "Sheet Pan Quesadillas", category: "dinner", url: "../odin-recipes/recipes/sheet-pan-quesadillas.html", image: "https://theforkedspoon.com/wp-content/uploads/2025/08/Sheet-Pan-Quesadillas-Recipe-1024x1536.jpg" },
  { name: "Shepherd's Pie", category: "dinner", url: "../odin-recipes/recipes/shepherds-pie.html", image: "" },
  { name: "Shrimp Bowl with Corn Salsa and Creamy Sauce", category: "dinner", url: "../odin-recipes/recipes/shrimp-bowl-corn-salsa.html", image: "https://masterthekitchen.net/wp-content/uploads/2025/04/Grilled-Shrimp-Bowl-768x960.webp" },
  { name: "Smashed Potatoes", category: "sides", url: "../odin-recipes/recipes/smashed-potatoes.html", image: "" },
  { name: "Soft Sugar Cookies with Royal Icing", category: "desserts", url: "../odin-recipes/recipes/soft-sugar-cookies.html", image: "https://images.squarespace-cdn.com/content/v1/5f0396837cd64e30d69a57f3/1608298100186-1SMQXLTYDJ07QANRSJ7O/cup+of+ambition%2C+cup+of+ambition+recipes%2C+cup+of+ambition+recipe%2C+dessert%2C+dessert+recipe%2C+sugar+cookies%2C+iced+sugar+cookies%2C+holiday+sugar+cookies%2C+decorated+sugar+cookies%2C+christmas+sugar+cookies%2C+royal+icing%2C+meringue+powder%2C+meringue+powder+icing%2C+meringue+powder+frosting%2C+sugar+cookie+frosting%2C+sugar+cookie+icing%2C+butter+cookies%2C+sugar+cookie+recipe%2C+best+rolled+sugar+cookies%2C+rolled+sugar+cookies%2C+cookie+cutters%2C+best+sugar+cookie+recipe%2C+easy+sugar+cookie+recipe%2C+freezing+cookie+dough%2C+royal+icing+recipe%2C+easy+royal+icing%2C+easy+royal+icing+recipe%2C+sugar+cookies+for+decorating%2C+decorating+sugar+cookies%2C+ugly+sweater+sugar+cookies%2C+ugly+sweater+cookies%2C+ugly+christmas+sweaters%2C+ugly+christmas+sweater+cookies%2C?format=1500w" },
  { name: "Sourdough Bagels", category: "bread", url: "../odin-recipes/recipes/sourdough-bagels.html", image: "https://www.farmhouseonboone.com/wp-content/uploads/2021/01/sourdough-bagels-14-copy-2-1024x683.jpg" },
  { name: "Sourdough Baguette", category: "bread", url: "../odin-recipes/recipes/sourdough-baguette.html", image: "https://www.farmhouseonboone.com/wp-content/uploads/2024/02/sourdough-italian-bread-11-1024x683.jpg" },
  { name: "Sourdough Bread", category: "bread", url: "../odin-recipes/recipes/sourdough-bread.html", image: "https://www.theclevercarrot.com/wp-content/uploads/2013/12/bread-cloth-1-of-1.jpg" },
  { name: "Sourdough Ciabatta", category: "bread", url: "../odin-recipes/recipes/sourdough-ciabatta.html", image: "https://www.farmhouseonboone.com/wp-content/uploads/2023/01/sourdough-ciabatta-19-300x300.jpg" },
  { name: "Sourdough Garlic Knots", category: "bread", url: "../odin-recipes/recipes/sourdough-garlic-knots.html", image: "https://www.farmhouseonboone.com/wp-content/uploads/2024/07/sourdough-garlic-knots-12-300x300.jpg" },
  { name: "Sourdough Italian Bread", category: "bread", url: "../odin-recipes/recipes/sourdough-italian-bread.html", image: "https://www.farmhouseonboone.com/wp-content/uploads/2024/02/sourdough-italian-bread-11-300x300.jpg" },
  { name: "Sourdough Starter", category: "bread", url: "../odin-recipes/recipes/sourdough-starter.html", image: "https://www.theclevercarrot.com/wp-content/uploads/2019/03/How-to-Care-for-Your-Sourdough-Starter-2-900x1024.jpg" },
  { name: "Steak Avocado Corn Bowl", category: "dinner", url: "../odin-recipes/recipes/steak-avocado-corn-bowl.html", image: "https://yumrow.com/wp-content/webp-express/webp-images/uploads/2025/05/0-3-640-N-3.jpg.webp" },
  { name: "Sweet Pepper Sausage Pasta", category: "dinner", url: "../odin-recipes/recipes/sweet-pepper-sausage-pasta.html", image: "https://lifewithjam.com/wp-content/webp-express/webp-images/uploads/2025/06/Copy-of-Image1000x1500-13-1-683x1024.jpg.webp" },
  { name: "Tamarind Agua Fresca", category: "drinks", url: "../odin-recipes/recipes/tamarind-agua-fresca.html", image: "https://www.allrecipes.com/thmb/2nIYkZlwmtt4W3HBR5RLjb5t4YY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3378553-1ae0727d6e0842d9ad15366096c6775e.jpg" },
  { name: "Tomato Basil Soup", category: "soups", url: "../odin-recipes/recipes/tomato-basil-soup.html", image: "https://cafedelites.com/wp-content/uploads/2016/03/Roasted-Tomato-Basil-Soup-7.jpg" },
  { name: "Tradional Pork Tamales with Red Chili Sauce", category: "dinner", url: "../odin-recipes/recipes/traditional-pork-tamales.html", image: "" },
  { name: "Wafflemaker Hash Browns", category: "breakfast", url: "../odin-recipes/recipes/wafflemaker-hash-browns.html", image: "https://github.com/forr-white/odin-recipes/blob/main/images/wafflemaker.jpeg?raw=true" },
  { name: "Watermelon Agua Fresca", category: "drinks", url: "../odin-recipes/recipes/watermelon-agua-fresca.html", image: "https://everydaylatina.com/wp-content/uploads/2025/07/Agua-de-Sandia-bottom-image-1200px.jpg" },
  { name: "Whole Wheat Sourdough Dinner Rolls", category: "bread", url: "../odin-recipes/recipes/whole-wheat-sourdough-dinner-rolls.html", image: "https://www.farmhouseonboone.com/wp-content/uploads/2025/04/whole-wheat-sourdough-dinner-rolls-5-300x300.jpg" },
];

// ===== DOM Elements =====
const listEl = document.getElementById("recipe-list");
const searchInput = document.getElementById("search");
const filterCategory = document.getElementById("filter-category");
const backToTopBtn = document.getElementById("back-to-top");
const generateBtn = document.getElementById("generate-btn");

// ===== Render Recipe List =====
function renderList() {
  const term = searchInput.value.toLowerCase();
  const category = filterCategory.value;
  listEl.innerHTML = '';

  recipes
    .filter(r => (!category || r.category === category) && r.name.toLowerCase().includes(term))
    .forEach(r => {
      const card = document.createElement('div');
      card.className = 'info-item';

      card.innerHTML = `
        <div class="card" style="overflow:hidden;">
          ${r.image 
            ? `<img src="${r.image}" alt="${r.name}" style="width:100%; height:150px; object-fit:cover; border-radius:8px;">`
            : ``}
        </div>
        <p><a href="${r.url}">${r.name}</a></p>
        <small style="color:#6b7280; font-size:14px;">${r.category}</small>
      `;

      listEl.appendChild(card);
    });
}


// ===== Event Listeners =====
searchInput.addEventListener("input", renderList);
filterCategory.addEventListener("change", renderList);

// Back to top button
window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 200 ? "flex" : "none";
});
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Recipe Builder =====
generateBtn.addEventListener("click", () => {
  const name = document.getElementById("new-name").value.trim();
  const image = document.getElementById("new-image").value.trim();
  const category = document.getElementById("new-category").value;
  const ingredients = document.getElementById("new-ingredients").value.trim().split("\n").filter(Boolean);
  const directions = document.getElementById("new-directions").value.trim().split("\n").filter(Boolean);
  const notes = document.getElementById("new-notes").value.trim().split("\n").filter(Boolean);

  if (!name) {
    alert("Please enter a recipe name.");
    return;
  }

  // Create HTML file content
  const html = `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${name}</title>
  <style>
    body { 
      font-family: Arial, sans-serif; 
      background: #f8fafc; 
      margin: 0; 
      padding: 20px; 
    }
    .container { 
      align-items: left;
    }
    header { 
      margin-bottom: 16px; 
    }
    h1 { 
      margin-bottom: 12px; 
    }
    nav a { 
      margin-right: 12px; 
      text-decoration: none; 
      color: #0369a1; 
    }
    img { 
      max-width: 60%; 
      height: auto; 
      margin-bottom: 20px; 
      border-radius: 8px; 
      display: block; 
    }
    ul { 
      list-style: none; 
      padding: 0; 
    }
    li { 
      margin-bottom: 6px; 
    }
    a { 
      color: #0369a1; 
      text-decoration: none; 
    }
    footer { 
      margin-top: 40px; 
      padding-top: 20px; 
      border-top: 1px solid #ddd; 
      font-size: 0.9rem; 
      color: #555; 
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>${name}</h1>
      <nav>
        <a href="https://forr-white.github.io/odin-recipes/index.html">Home</a>
      </nav>
    </header>

    ${image ? `<img src="${image}" alt="${name}">` : ""}

    <h3>Ingredients</h3>
    <ul>
      ${ingredients.map(i => `<li>${i}</li>`).join("")}
    </ul>

    <h3>Directions</h3>
    <ol>
      ${directions.map(d => `<li>${d}</li>`).join("")}
    </ol>

    ${notes.length ? `<h3>Notes</h3><ol>${notes.map(n => `<li>${n}</li>`).join("")}</ol>` : ""}

    <footer>
      <p>Recipe generated with Forrest's Recipe Builder</p>
    </footer>
  </div>
</body>
</html>
`;



  // Download as file
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${name.replace(/\s+/g, "_").toLowerCase()}.html`;
  a.click();
  URL.revokeObjectURL(url);
});

// ===== Initial Render =====
renderList();
