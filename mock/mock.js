const fs = require('fs')
const path = require('path')

const filePaths = []
const blackList = ['components', 'exception', 'mixin']

/**
 * src 目录下找文件名为 filename 的文件，返回文件路径数组
 */
function getFilePath(src, filename) {
    const files = fs.readdirSync(src)
	// console.log(files)
    files.forEach(file => {
        if (blackList.findIndex(item => item === file) !== -1) return
        const filePath = path.join(src, file)
        if (fs.statSync(filePath).isDirectory()) {
            getFilePath(filePath, filename)
        } else {
            if (file === filename) {
                filePaths.push(filePath)
            }
        }
    })
}

function getMockData() {
    // 找 src/views 目录下的 mock.js 文件，递归查询
    const src = path.join(process.cwd(), 'src/views')
    getFilePath(src, 'mock.js')

    // 将所有 mock.js 导出的对象合并为一个数组
    let mocks = []
    filePaths.forEach(item => {
        mocks = mocks.concat(require(item) || [])
    })
    return mocks
}

module.exports = {
    mockData: getMockData(),
    getMockData,
    mockFilePaths: filePaths,
}