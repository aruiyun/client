import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { injectHtml } from 'vite-plugin-html'
const cdn = {
    js: [],
    css: ['http://liuarui.free.idcfengye.com/public/4.16.6/antd.min.css'],
}

export default defineConfig({
    base: 'http://liuarui.free.idcfengye.com/cms/',
    plugins: [
        injectHtml({
            injectData: {
                injectScript: cdn.js
                    .map((url) => {
                        return `<script crossorigin src="${url}"></script> `
                    })
                    .join(''),
                injectCss: cdn.css
                    .map((url) => {
                        return `<link href="${url}" rel="stylesheet">`
                    })
                    .join(''),
            },
        }),
        reactRefresh(),
    ],
    resolve: {
        alias: {},
    },
    build: {
        outDir: 'dist/cms/',
        rollupOptions: {
            external: [],
        },
    },
})
