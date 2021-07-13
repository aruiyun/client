// client 构建脚本
// 此处仅进行构建
// 部署到小米5服务器使用 jenkins 上写的脚本进行部署
; (() => {
    const { execCommand, consoleSplitLine } = require('./utils')
    const path = require('path')
    const fs = require('fs')
    const log = console.log
    const ROOT_PATH = path.join(__dirname, '../')

    const projects = fs.readdirSync(`${ROOT_PATH}/project`)
    const successList = []
    const failList = []
    function runBuild(projectName) {
        execCommand(`cd ${ROOT_PATH}/project/${projectName} && npm i --registry https://registry.npm.taobao.org`)
        execCommand(`cd ${ROOT_PATH}/project/${projectName} && npm run build`)
    }

    function consoleDoneListResult(list, desc) {
        if (list.length > 0) {
            log(`${desc} => ${list.join('，')}`)
        }
    }

    projects.forEach((projectName) => {
        if (projectName === 'public') return
        try {
            consoleSplitLine()
            log(`当前正在构建项目: ${projectName}`)
            runBuild(projectName)
            log(`${projectName}构建成功 ✅!`)
            successList.push(projectName)
            consoleSplitLine()
        } catch (e) {
            log(`${projectName}构建失败 !`, e)
            failList.push(projectName)
        }
    })
    consoleDoneListResult(successList, '构建成功的项目')
    consoleDoneListResult(failList, '构建失败的项目')
    if (successList.length === 0) {
        throw new Error('构建失败')
    }
    console.log('build script done !')
})()
