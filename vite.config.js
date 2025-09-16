import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
            // Assure que Vite utilise ASSET_URL en prod
            publicDirectory: 'public',
        }),
        react(),
    ],
    base: process.env.ASSET_URL ? process.env.ASSET_URL + '/' : '/',
});
