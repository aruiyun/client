const childProcess = require('child_process')

execCommand = (command, options = {}) => {
    childProcess.execSync(
        command,
        Object.assign(
            {
                stdio: 'inherit',
            },
            options
        )
    )
}

consoleSplitLine = () => {
    console.log('**************************')
}
module.exports = {
    execCommand,
    consoleSplitLine,
}
