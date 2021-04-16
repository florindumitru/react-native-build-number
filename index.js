const fs = require('fs');
const path = require("path");
const fileName = '../../app.json';
const file = require(fileName);

const projPath = path.resolve(
  process.cwd()
);
const appJSONPath = path.join(projPath, "app.json");

file.build = file.build + 1;

fs.writeFileSync(appJSONPath, JSON.stringify(file, null, 2));

