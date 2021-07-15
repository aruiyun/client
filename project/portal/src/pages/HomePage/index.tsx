import React, { Fragment, useEffect, useState } from 'react'
import './style.css'
import { fetchReportList } from '../../api/common'
import { reportInfo } from '../../utils/reportInfo'

function HomePage() {
    const [enterUserNum, setEnterUserNum] = useState(0)

    useEffect(() => {
        reportInfo('portal-homePage', {
            type: 'load',
        })
    }, [])

    useEffect(() => {
        fetchReportList().then((res) => {
            if (Array.isArray(res?.DATA)) {
                setEnterUserNum(res.DATA.length)
            }
        })
    }, [])

    return (
        <Fragment>
            <section className="portal-wrap">
                <header className="portal-header">
                    <h1>
                        <img
                            className="header-logo"
                            src="/public/img/logo.png"
                        ></img>
                        Aruiyun Portal
                    </h1>
                </header>
                <section>
                    <section>
                        <h2>网站</h2>
                        <p>
                            <a href="/cms">云文件管理系统"(TODO)</a>
                        </p>
                        <p>
                            <a href="https://liuarui.github.io/">阿锐的博客</a>
                        </p>
                    </section>
                    <section>
                        <h2>工具</h2>
                        <p>
                            <a href="https://github.com/liuarui/easyrun">
                                懒人命令行工具 - easyrun
                            </a>
                        </p>
                    </section>
                </section>
                <footer className="portal-footer">
                    <p>该网站 power By liuarui 的 小米5</p>
                    <p> 安卓手机 yyds !</p>
                    <p>访问次数: {enterUserNum}</p>
                </footer>
            </section>
        </Fragment>
    )
}

export default HomePage
