const fs = require("fs");
const path = require("path");

module.exports = async function() {
  const dirFiles = await fs.promises.readdir(__dirname);
  const jsonFiles = dirFiles.filter((f) => f.endsWith("json5"));

  const pagesData = jsonFiles.map((fileName) => {
    return require(path.join(__dirname, fileName));
  })
  
  return pagesData
};