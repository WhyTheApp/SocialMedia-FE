const fs = require("fs");
const path = require("path");

const appDir = path.join(__dirname, "../src/app");

const folders = fs
  .readdirSync(appDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_"))
  .map((entry) => "/" + entry.name);

fs.writeFileSync("./validPaths.json", JSON.stringify(folders, null, 2));
console.log("✅ validPaths.json generated");
