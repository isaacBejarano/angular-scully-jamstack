"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var scully_1 = require("@scullyio/scully");
// const { RemoveUnusedCSSPlugin } = require('scully-plugin-remove-unused-css'); // <- dep: [extract-css, purgeCSS]
// FIXME: "scully-plugin-minify-html" is using deprecated plugin type:"render"  use "postProcessByHtml" instead
var postRenderers = ['MinifyHtml'];
var minifyHtmlOptions = {
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
scully_1.setPluginConfig('MinifyHtml', 'postProcessByHtml', minifyHtmlOptions);
exports.config = {
    projectRoot: './src',
    projectName: 'angular-mission1',
    outDir: './dist/static',
    defaultPostRenderers: __spreadArray([], postRenderers),
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
