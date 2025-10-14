const fs = require("fs");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/audio");
  eleventyConfig.addPassthroughCopy("src/assets"); // for favicon, og images, etc.

  eleventyConfig.addShortcode("svg", function (filename) {
    const filePath = `./src/assets/img/${filename}.svg`; // Adjust path as needed
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, "utf8");
    }
    return ""; // Return empty string if file not found
  });

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
  };
};
