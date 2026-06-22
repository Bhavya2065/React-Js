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
const indexCssContent = `:root {
  --text: #6b6375;
  --text-h: #08060d;
  --bg: #fff;
  --border: #e5e4e7;
  --code-bg: #f4f3ec;
  --accent: #aa3bff;
  --accent-bg: rgba(170, 59, 255, 0.1);
  --accent-border: rgba(170, 59, 255, 0.5);
  --social-bg: rgba(244, 243, 236, 0.5);
  --shadow:
    rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0 4px 6px -2px;

  --sans: system-ui, 'Segoe UI', Roboto, sans-serif;
  --heading: system-ui, 'Segoe UI', Roboto, sans-serif;
  --mono: ui-monospace, Consolas, monospace;

  font: 18px/145% var(--sans);
  letter-spacing: 0.18px;
  color-scheme: light dark;
  color: var(--text);
  background: var(--bg);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --text: #9ca3af;
    --text-h: #f3f4f6;
    --bg: #16171d;
    --border: #2e303a;
    --code-bg: #1f2028;
    --accent: #c084fc;
    --accent-bg: rgba(192, 132, 252, 0.15);
    --accent-border: rgba(192, 132, 252, 0.5);
    --social-bg: rgba(47, 48, 58, 0.5);
    --shadow:
      rgba(0, 0, 0, 0.4) 0 10px 15px -3px, rgba(0, 0, 0, 0.25) 0 4px 6px -2px;
  }

  #social .button-icon {
    filter: invert(1) brightness(2);
  }
}

body {
  margin: 0;
}

#root {
  width: 1126px;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
}

h1,
h2 {
  font-family: var(--heading);
  font-weight: 500;
  color: var(--text-h);
}

h1 {
  font-size: 56px;
  letter-spacing: -1.68px;
  margin: 32px 0;
  @media (max-width: 1024px) {
    font-size: 36px;
    margin: 20px 0;
  }
}
h2 {
  font-size: 24px;
  line-height: 118%;
  letter-spacing: -0.24px;
  margin: 0 0 8px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
}
p {
  margin: 0;
}

code,
.counter {
  font-family: var(--mono);
  display: inline-flex;
  border-radius: 4px;
  color: var(--text-h);
}

code {
  font-size: 15px;
  line-height: 135%;
  padding: 4px 8px;
  background: var(--code-bg);
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
