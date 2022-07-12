import css from 'rollup-plugin-css-only'; // Extract styles in .vue files.
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from '@rollup/plugin-buble'; // Transpile/polyfill with reasonable browser support
import image from '@rollup/plugin-image'; // Encode JPG, PNG, GIF, SVG, and WebP files using base64
import { terser } from "rollup-plugin-terser"; // Minify a bundle using Terser.
export default [
    // ESM build to be used with webpack/rollup.
    {
        input: 'src/wrapper.js', // Path relative to package.json
        output: {
            format: 'esm',
            file: 'dist/dt-basic-vue.esm.js'
        },
        plugins: [
            vue({
                css: true, // Dynamically inject css as a <style> tag
                compileTemplate: true, // Explicitly convert template to render function
            }),
            buble(), // Compile ES2015
            image()
        ],
    },
    // SSR build.
    {
        input: 'src/wrapper.js',
        output: {
            format: 'cjs',
            file: 'dist/dt-basic-vue.ssr.js'
        },
        plugins: [
            vue({ template: { optimizeSSR: true } }),
            buble(), // Compile ES2015
            image()
        ]
    },
    // Browser build.
    {
        input: 'src/wrapper.js',
        output: {
            name: "DtBasicVue",
            format: 'iife',
            file: 'dist/dt-basic-vue.min.js',
            plugins: [terser()]
        },
        plugins: [
            css(),
            vue({
                css: false, // Not dynamically inject css as a <style> tag
                compileTemplate: true, // Explicitly convert template to render function
            }),
            buble(), // Compile ES2015
            image()
        ],
    }
];