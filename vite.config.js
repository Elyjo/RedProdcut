import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    // En dev : pas besoin
    // En prod : force /build pour retrouver les assets dans public/build
    base: process.env.ASSET_URL ? process.env.ASSET_URL + '/build/' : '/build/',
});
