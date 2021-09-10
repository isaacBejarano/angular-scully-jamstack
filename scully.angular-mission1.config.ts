import { ScullyConfig } from '@scullyio/scully';
const { MinifyHtml } = require('scully-plugin-minify-html'); // <- dep: [html-minifier, tslib]
// const { RemoveUnusedCSSPlugin } = require('scully-plugin-remove-unused-css'); // <- dep: [extract-css, purgeCSS]
// require('@notiz/scully-plugin-lazy-images'); // 'lazyImages'

import '@notiz/scully-plugin-lazy-images';

// FIXME: "scully-plugin-minify-html" is using deprecated plugin type:"render"  use "postProcessByHtml" instead
const postRenderers = [
  // MinifyHtml,
  // RemoveUnusedCSSPlugin,
  'lazyImages',
];

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
    //   postRenderers: ['lazyImages'] // <== HERE!
    // }
  },
};
