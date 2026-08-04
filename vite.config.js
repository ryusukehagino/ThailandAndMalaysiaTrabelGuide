import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { resolve } from 'path';

const dir = 'thai_and_malaysia_travel_guide';

export default defineConfig({
    base: './',
    build: {
        outDir: `./dist/${dir}`,
        sourcemap: true,
        emptyOutDir: true,
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@module': fileURLToPath(new URL('./src/js/module', import.meta.url)),
        },
    },
});