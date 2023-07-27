module.exports = function(eleventyConfig) {
    // additional watch targets
    eleventyConfig.addWatchTarget("./src/posts");
    // copy static assets to the output folder
    eleventyConfig.addPassthroughCopy("./src/*.png");
    eleventyConfig.addPassthroughCopy("./src/*.ico");
    eleventyConfig.addPassthroughCopy("./src/*.xml");
    eleventyConfig.addPassthroughCopy("./src/*.svg");
    eleventyConfig.addPassthroughCopy("./src/site.webmanifest");
    eleventyConfig.addPassthroughCopy("./src/ssh.keys");
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/fonts");
    eleventyConfig.addPassthroughCopy("./src/static");
    eleventyConfig.addPassthroughCopy({"./src/posts/*/images/*": "images"});
    return {
        // template formats to read
        templateFormats: ["html", "md", "njk"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        // specify input and output directories
        dir: {
            input: "src",
            includes: "_includes",
            output: "public",
        },
    };
};
