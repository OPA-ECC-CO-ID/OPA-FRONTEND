import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import inject from '@rollup/plugin-inject'
import * as glob from 'glob'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const input = Object.fromEntries(
    glob
        .sync('resources/js/**/*.js')
        .map((file) => [
            path.relative(
                'resources/js',
                file.slice(0, file.length - path.extname(file).length)
            ),
            fileURLToPath(new URL(file, import.meta.url)),
        ])
)

export default defineConfig({
    resolve: {
        alias: {
            '@': '/resources/js',
            '@css': '/resources/css',
        },
    },
    build: {
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    const extension =
                        assetInfo.name?.split('.').at(1) ?? 'compiled'
                    return `${extension}/[name].[hash][extname]`
                },
                chunkFileNames: 'js/chunks/[name].[hash].js',
                entryFileNames: 'js/[name].[hash].js',
            },
        },
    },
    plugins: [
        laravel({
            input,
            refresh: true,
        }),
        inject({
            // => that should be first under plugins array
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ],
})
