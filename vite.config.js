import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path'; 

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/sass/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        
    ],
    resolve: {
        alias: {
            '~bootstrap-icons': path.resolve(__dirname, 'node_modules/bootstrap-icons'),
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "~bootstrap-icons/font/bootstrap-icons.css";`
            }
        }
    }
    
});
