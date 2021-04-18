const path = require('path')
const fs = require('fs')

async function writePackageJson(override, { DIST, rootDir }) {
  const packageJsonStr = fs.readFileSync(
    path.resolve(rootDir, 'src', 'node', 'package.json'),
    'utf-8'
  )
  let packageJson = JSON.parse(packageJsonStr)

  delete packageJson.private
  delete packageJson.dependencies
  delete packageJson.devDependencies
  delete packageJson.peerDependencies
  delete packageJson.scripts
  delete packageJson['standard-version']
  delete packageJson.browserslist
  delete packageJson.husky
  delete packageJson.files

  packageJson = {
    ...packageJson,
    ...override
  }

  const editedPackageJsonStr = JSON.stringify(packageJson, null, 2)
  fs.writeFileSync(path.resolve(DIST, 'package.json'), editedPackageJsonStr)
}

module.exports = {
  writePackageJson
}
