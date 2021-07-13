import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './views/App'
import.meta.env.DEV && import('antd/dist/antd.css')

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
