import { ScullyConfig, setPluginConfig } from '@scullyio/scully';

import { MinifyHtml } from 'scully-plugin-minify-html'; // <- dep: [html-minifier, tslib]
import { MinifyHtmlOptions } from 'scully-plugin-minify-html/lib';

// const { RemoveUnusedCSSPlugin } = require('scully-plugin-remove-unused-css'); // <- dep: [extract-css, purgeCSS]

// FIXME: "scully-plugin-minify-html" is using deprecated plugin type:"render"  use "postProcessByHtml" instead
const postRenderers = ['minifyHtml'];

const minifyHtmlOptions: MinifyHtmlOptions = {
  minifyOptions: {
    // caseSensitive: true,
    // removeComments: true,
    // collapseWhitespace: true,
    // collapseBooleanAttributes: true,
    // removeRedundantAttributes: true,
    // useShortDoctype: true,
    // removeEmptyAttributes: true,
    // minifyCSS: true,
    // minifyJS: true,
    // removeScriptTypeAttributes: true,
    // removeStyleLinkTypeAttributes: true,
    // // don't remove attribute quotes, not all social media platforms can parse this over-optimization
    // removeAttributeQuotes: false,
    // // don't remove optional tags, like the head, not all social media platforms can parse this over-optimization
    // removeOptionalTags: false,
    // // scully specific HTML comments
    // // this will always be added in the final minifyOptions config
    // ignoreCustomComments: [
    //   /scullyContent-(begin|end)/
    // ],
    // // scully specific data injection
    // // this will always be added in the final minifyOptions config
    // ignoreCustomFragments: [
    //   /\/\*\* ___SCULLY_STATE_(START|END)___ \*\//
    // ]
  },
};
setPluginConfig(MinifyHtml, 'postProcessByHtml', minifyHtmlOptions);

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'angular-mission1',
  outDir: './dist/static',
  defaultPostRenderers: [...postRenderers],
  routes: {
    /* Plugins fos specific Routes */
    // '/blog/:slug': {
    //   type: 'contentFolder',
    //   slug: {
    //     folder: './content/blog'
    //   },
    //   postRenderers: ['MinifyHtml'] // <== HERE!
    // }
  },
};
