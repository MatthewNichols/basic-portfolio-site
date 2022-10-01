const fs = require("fs");
const path = require("path");

const PicturePageImagePathBase = "/pictures/";

class PicturePageImage {
  constructor(imageData) {
    this.pathName = imageData.path || null;
    this.path = `${PicturePageImagePathBase}${imageData.path || ""}`;
    this.title = imageData.title || null;
  }
}
  class PicturePage {
  constructor(data) {
    this.pageName = data.pageName;
    if (data.images && data.images.length) {
      this.images = data.images.map((p) => new PicturePageImage(p));
    }
  }
}

module.exports = async function() {
  const dirFiles = await fs.promises.readdir(__dirname);
  const jsonFiles = dirFiles.filter((f) => f.endsWith("json5"));

  const pagesData = jsonFiles.map((fileName) => {
    return require(path.join(__dirname, fileName));
  })
  
  return pagesData.map((pd) => new PicturePage(pd));
};