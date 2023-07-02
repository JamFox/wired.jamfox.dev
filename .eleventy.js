module.exports = function(eleventyConfig) {
    // copy static assets to the output folder
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/fonts");
    eleventyConfig.addPassthroughCopy("./src/static");
    return {
        // specify input and output directories
        dir: {
            input: "src",
            output: "public",
        },
    };
};
