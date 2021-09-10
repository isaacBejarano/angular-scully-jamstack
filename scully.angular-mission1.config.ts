import { ScullyConfig } from '@scullyio/scully';
const { MinifyHtml } = require('scully-plugin-minify-html'); // <- dep: html-minifier
require('@notiz/scully-plugin-lazy-images'); // 'lazyImages'


const postRenderers = [MinifyHtml, 'lazyImages'];

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
