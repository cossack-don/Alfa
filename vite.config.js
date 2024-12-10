import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    base:'/lk',
    plugins: [
        vue(),
        laravel({
            input: [
                'resources/lk/css/index.css',
                'resources/lk/app.js',
                'resources/landing/css/index.css',
                'resources/landing/js/index.js',],
            refresh: true,
        }),
    ],
});
