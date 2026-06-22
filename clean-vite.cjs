const fs = require('fs');
const path = require('path');

const targetDir = process.cwd();
const projectName = path.basename(targetDir);

console.log(`Cleaning Vite project in: ${targetDir}`);

// 1. Delete directories
const dirsToDelete = [
  path.join(targetDir, 'src', 'assets'),
  path.join(targetDir, 'public')
];

dirsToDelete.forEach(dir => {
  if (fs.existsSync(dir)) {
    try {
      fs.rmSync(dir, { recursive: true, force: true });
      console.log(`Deleted: ${dir}`);
    } catch (err) {
      console.error(`Error deleting ${dir}:`, err.message);
    }
  }
});

// 2. Write empty App.css
const appCssPath = path.join(targetDir, 'src', 'App.css');
try {
  fs.writeFileSync(appCssPath, '');
  console.log(`Cleared: ${appCssPath}`);
} catch (err) {
  console.error(`Error writing ${appCssPath}:`, err.message);
}

// 3. Write App.jsx code
const appJsxPath = path.join(targetDir, 'src', 'App.jsx');
const appJsxContent = `import './App.css'

function App() {

  return (
    <>
      <h2>Hello Great Developer!! You are the God</h2>
    </>
  )
}

export default App
`;

try {
  fs.writeFileSync(appJsxPath, appJsxContent);
  console.log(`Updated: ${appJsxPath}`);
} catch (err) {
  console.error(`Error writing ${appJsxPath}:`, err.message);
}

// 4. Write index.css code
const indexCssPath = path.join(targetDir, 'src', 'index.css');
const indexCssContent = `body {
  margin: 0;
  background-color: #212121;
  color: aliceblue;
  display: flex;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
  text-align: center;
}
`;

try {
  fs.writeFileSync(indexCssPath, indexCssContent);
  console.log(`Updated: ${indexCssPath}`);
} catch (err) {
  console.error(`Error writing ${indexCssPath}:`, err.message);
}

// 5. Write index.html with clean content and updated title
const indexHtmlPath = path.join(targetDir, 'index.html');
const indexHtmlContent = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${projectName}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`;

try {
  fs.writeFileSync(indexHtmlPath, indexHtmlContent);
  console.log(`Updated: ${indexHtmlPath}`);
} catch (err) {
  console.error(`Error writing ${indexHtmlPath}:`, err.message);
}

console.log('Cleanup finished successfully!');
