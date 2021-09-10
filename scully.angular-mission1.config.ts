import { ScullyConfig } from '@scullyio/scully';
import { MinifyHtml } from 'scully-plugin-minify-html'; // <- dep: [html-minifier, tslib]
// const { RemoveUnusedCSSPlugin } = require('scully-plugin-remove-unused-css'); // <- dep: [extract-css, purgeCSS]

// import '@notiz/scully-plugin-lazy-images';

// FIXME: "scully-plugin-minify-html" is using deprecated plugin type:"render"  use "postProcessByHtml" instead
const postRenderers = [MinifyHtml];

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
