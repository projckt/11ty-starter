module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  return {
    dir: {
      input: "src",
      output: "www",
    },
    templateFormats: ["njk"],
  };
};