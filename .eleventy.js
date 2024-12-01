import plugins from './src/_config/plugins.js';

export default async function (eleventyConfig) {

  // the permalink issue happens when we add the plugin below
  eleventyConfig.addPlugin(plugins.jsConfig);

  return {
    dir: {
      input: "src",
      layouts: "_layouts"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  }
}