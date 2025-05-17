const fs = require("fs");
const path = require("path");

const appDir = path.join(__dirname, "../src/app");

function getFoldersRecursively(dir, basePath = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let folders = [];

  for (const entry of entries) {
    if (entry.isDirectory() && !entry.name.startsWith("_")) {
      const fullPath = path.join(dir, entry.name);
      const routePath = basePath + "/" + entry.name;

      folders.push(routePath);

      folders = folders.concat(getFoldersRecursively(fullPath, routePath));
    }
  }

  return folders;
}

const folders = getFoldersRecursively(appDir);

fs.writeFileSync("./validPaths.json", JSON.stringify(folders, null, 2));
console.log("✅ validPaths.json generated");
