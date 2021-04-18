const path = require('path')
// const fs = require('fs')

const _rootDir = path.resolve(__dirname, '../')
const taskCommon = require('./task_common')

async function start() {
  const filesOpt = {
    rootDir: _rootDir,
    DIST: path.resolve(_rootDir, 'dist/node')
  }
  await taskCommon.writePackageJson(
    {
      // name: '@mini-helper/node',
      // description: 'only nodejs functions',
      // main: 'index.js',
      // module: 'index.es.js',
      // types: 'index.d.ts'
    },
    filesOpt
  )
}

start()
