module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget(".tmp/css/custom.css");
    eleventyConfig.addPassthroughCopy({".tmp/css/custom.css": "css/custom.css"});

    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addPassthroughCopy("resume-trippshelnutt.pdf");
}