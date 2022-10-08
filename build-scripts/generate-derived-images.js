const path = require("path");
const fs = require("fs");
const Image = require("@11ty/eleventy-img"); 


  const pictureFiles = fs.readdirSync("pictures/", { withFileTypes: true });
  
  pictureFiles.forEach(pic => {
    if (pic.isDirectory()) { return; }
    console.log(pic)
  });
