; (() => {
	const { execCommand, consoleSplitLine } = require('./utils')
	const path = require('path')
	const fs = require('fs')
	const log = console.log
	const ROOT_PATH = path.join(__dirname, '../')
	function runMoveDist(projectName) {
		const sourcePath = `${ROOT_PATH}/project/${projectName}/dist/*`
		const targetPath = `${ROOT_PATH}/dist/`
		if (!fs.existsSync(targetPath)) {
			execCommand(`mkdir ${ROOT_PATH}/dist/`)
		}
		execCommand(`cp -rf ${sourcePath} ${targetPath}`)
	}

	const projects = fs.readdirSync(`${ROOT_PATH}/project`)
	projects.forEach((projectName) => {
		try {
			consoleSplitLine()
			log('开始搬运', projectName)
			runMoveDist(projectName)
			log('搬运完成', projectName)
			consoleSplitLine()
		} catch (e) {
			log(`${projectName}dist 搬运失败 !`, e)
		}
	})
	console.log('pre deploy done !')
})()
