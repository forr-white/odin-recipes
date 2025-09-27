const fs = require("fs");
const path = require("path");

const recipesDir = path.join(__dirname, "../recipes");
const indexPath = path.join(__dirname, "../index.html");

function titleCase(str) {
  return str
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
}

// Find all recipe HTML files
const files = fs.readdirSync(recipesDir).filter(f => f.endsWith(".html"));

// Build recipe links
const recipeLinks = files
  .map(f => {
    const name = titleCase(f.replace(".html", ""));
    return `<li><a href="./recipes/${f}">${name}</a></li>`;
  })
  .join("\n");

// Simple HTML template
const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${name}</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; margin: 0; padding: 20px; }
    .container { max-width: 980px; margin: 0 auto; }
    header { margin-bottom: 16px; }
    h1 { margin-bottom: 12px; }
    nav a { margin-right: 12px; text-decoration: none; color: #0369a1; }
    img { max-width: 60%; height: auto; margin-bottom: 20px; border-radius: 8px; }
    input, select { padding: 6px; margin-bottom: 12px; border-radius: 6px; border: 1px solid #ccc; width: 100%; max-width: 300px; display: block; }
    ul { list-style: none; padding: 0; }
    li { margin-bottom: 6px; }
    a { color: #0369a1; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>${name}</h1>
      <nav>
        <a href="../index.html">Home</a>
    </nav>
    </header>
  <ul>
    ${recipeLinks}
  </ul>
</body>
</html>`;

// Write new index.html
fs.writeFileSync(indexPath, html);

console.log("✅ index.html updated with", files.length, "recipes");
