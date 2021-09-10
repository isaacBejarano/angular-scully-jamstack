import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
const { MinifyHtml } = require('scully-plugin-minify-html'); // <- dep: html-minifier
import { Options } from 'html-minifier';
require('@notiz/scully-plugin-lazy-images'); // 'lazyImages'

const minifyOptions: Options = {
  // caseSensitive: true,
  removeComments: false,
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
  // ignoreCustomComments: [/scullyContent-(begin|end)/],
  // // scully specific data injection
  // // this will always be added in the final minifyOptions config
  // ignoreCustomFragments: [/\/\*\* ___SCULLY_STATE_(START|END)___ \*\//],
};

// setPluginConfig(MinifyHtml, minifyHtmlOptions);

const postRenderers = [ MinifyHtml, 'lazyImages' ];

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'angular-mission1',
  outDir: './dist/static',
  defaultPostRenderers: postRenderers,
  routes: {
    /* Plugins fos specific Routes */
    // '/blog/:slug': {
    //   type: 'contentFolder',
    //   slug: {
    //     folder: './content/blog'
    //   },
    //   postRenderers: ['lazyImages'] // <== HERE!
    // }
  },
};
