/**
 * @function fileHash
 * @param {string} filename
 * @param {'sha1'|'md5'|'sha256'|'sha512'} algorithm
 * @returns {Promise<string>|false}
 */
export async function fileHash(filename, algorithm = 'md5') {
  const result = new Promise((resolve, reject) => {
    try {
      const { createHash } = require('crypto')
      const fs = require('fs')
      const shasum = createHash(algorithm)
      const s = fs.ReadStream(filename)
      s.on('data', data => shasum.update(data))
      // making digest
      s.on('end', () => {
        const hash = shasum.digest('hex')
        return resolve(hash)
      })
    } catch (error) {
      return reject(error)
    }
  })

  return result
}

/**
 * using path.parse
 * @function fileParse
 * @param {String} filePath
 * @returns {import('path').ParsedPath}
 */
export function fileParse(filePath) {
  const { parse } = require('path')
  return parse(filePath) || false
}

/**
 * using path.parse
 * @function pathJoin
 * @param {Array<string>} paths
 * @returns {String}
 */
export function pathJoin(...paths) {
  const { join } = require('path')
  return join(...paths)
}

/**
 * using path.extname
 * @function extName
 * @param {String} filePath
 * @returns {String} extension ex: '.png'
 */
export function extName(filePath) {
  const { extname } = require('path')
  return extname(filePath) || ''
}

/**
 * @function fileExists
 * @param {string} filePath
 */
export function fileExists(filePath) {
  try {
    const fs = require('fs')
    return !!fs.existsSync(filePath)
  } catch (err) {
    return false
  }
}

/**
 * @function deleteFile
 * @param {string} filePath
 * @returns {Promise<Boolean>}
 */
export async function deleteFile(filePath) {
  try {
    const fs = require('fs')
    if (fileExists(filePath)) {
      await fs.unlinkSync(filePath)
    }
    return true
  } catch (_error) {
    // logError(__filename, 'deleteFile', err)
    return false
  }
}

/**
 * @function renameFile
 * @param {String} oldPath
 * @param {String} newPath
 * @param {Boolean} force
 * @returns {Boolean}
 */
export function renameFile(oldPath, newPath, force) {
  try {
    const fs = require('fs')
    if (force && fileExists(newPath)) {
      fs.unlinkSync(newPath)
    }
    fs.renameSync(oldPath, newPath)
    return true
  } catch (_error) {
    return false
  }
}

/**
 * @function copyFile
 * @param {string} source
 * @param {string} target
 * @returns {Promise<boolean>}
 */
export async function copyFile(source, target) {
  let result = false
  try {
    const { copyFile } = require('fs/promises')
    await copyFile(source, target)
    result = true
  } catch {
    result = false
  }
  return result
}
