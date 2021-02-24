// eslint-disable-next-line no-new-func
export const isNode = new Function('try {return this===global;}catch(e){return false;}')

// eslint-disable-next-line no-new-func
export const isBrowser = new Function('try {return this===window;}catch(e){ return false;}')

/**
 * @function fileHash
 * @param {string} filename
 * @param {'sha1'|'md5'|'sha256'|'sha512'} algorithm
 * @returns {Promise<string>|false}
 */
export async function fileHash(filename, algorithm = 'md5') {
  if (isBrowser()) return false
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
  if (isBrowser()) return false
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
  if (isBrowser()) return false
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
  if (isBrowser()) return false
  const { extname } = require('path')
  return extname(filePath) || ''
}

/**
 * @function fileExists
 * @param {string} filePath
 */
export function fileExists(filePath) {
  if (isBrowser()) return false
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
  if (isBrowser()) return false
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
  if (isBrowser()) return false
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
  if (isBrowser()) return false

  const result = await new Promise(resolve => {
    const { copyFile } = require('fs')
    copyFile(source, target, err => {
      if (err) return resolve(false)
      return resolve(true)
    })
  })
  return result
}
