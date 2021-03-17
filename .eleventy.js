module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget(".tmp/css/custom.css");
    eleventyConfig.addPassthroughCopy({".tmp/css/custom.css": "css/custom.css"});

    eleventyConfig.addPassthroughCopy("resume-trippshelnutt.pdf");
}