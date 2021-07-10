import React, { Fragment, useState } from 'react'
import './app.css'
import logo from './logo.png'
function App() {
  return (
    <Fragment >
      <section className="portal-wrap">
        <header className="portal-header">
          <h1>
            <img className="header-logo" src={logo}></img>
            Aruiyun Portal
          </h1>
        </header>
        <section>
          <p>
            <a href="/">
              云文件管理系统
            </a>

          </p>
          <p>
            <a href="https://liuarui.github.io/">
              阿锐的博客
            </a>
          </p>
        </section>
      </section>
    </Fragment>
  )
}

export default App
