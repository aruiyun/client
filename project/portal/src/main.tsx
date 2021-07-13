import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import.meta.env.DEV && import('antd/dist/antd.css')

import HomePage from './pages/HomePage'

ReactDOM.render(
    <React.StrictMode>
        <HomePage />
    </React.StrictMode>,
    document.getElementById('root')
)
