import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { injectHtml } from 'vite-plugin-html'
const cdn = {
    js: [
        'https://cdn.bootcdn.net/ajax/libs/react/17.0.2/umd/react.production.min.js',
        'https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js',
        'https://cdn.bootcdn.net/ajax/libs/antd/4.16.6/antd.min.js',
        'https://cdn.bootcdn.net/ajax/libs/axios/0.21.1/axios.min.js',
    ],
    css: ['https://cdn.bootcdn.net/ajax/libs/antd/4.16.6/antd.min.css'],
}

export default defineConfig({
    base: '/cms',
    plugins: [
        injectHtml({
            injectData: {
                injectScript: cdn.js
                    .map((url) => {
                        return `<script src="${url}"></script>`
                    })
                    .join('\b'),
                injectCss: cdn.css
                    .map((url) => {
                        return `<link href="${url}" rel="stylesheet">`
                    })
                    .join('\b'),
            },
        }),
        reactRefresh(),
    ],
    resolve: {
        alias: {},
    },
    build: {
        rollupOptions: {
            external: ['antd', 'react', 'react-dom', 'axios'],
        },
    },
})
