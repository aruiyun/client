import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { injectHtml } from 'vite-plugin-html'

const cdn = {
    js: [
        // '/public/cdn/react.production.min.js',
        // '/public/cdn/react-dom.production.min.js',
        // 'antd.min.js',
        // 'axios.min.js',
    ],
    css: ['http://liuarui.free.idcfengye.com/public/cdn/antd.min.css'],
}

export default defineConfig({
    base: '/',
    plugins: [
        injectHtml({
            injectData: {
                injectScript: cdn.js
                    .map((url) => {
                        return `<script src="${url}"></script>`
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
        rollupOptions: {
            external: [],
        },
    },
})
