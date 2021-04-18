import { createHash } from 'crypto'
import fs from 'fs'
import { join, extname, parse } from 'path'

// eslint-disable-next-line no-new-func
export const isNode = new Function('try {return this===global;}catch(e){return false;}')

// eslint-disable-next-line no-new-func
export const isBrowser = new Function('try {return this===window;}catch(e){ return false;}')

/**
 * @function fileHash
 * @param {string} filename
 * @param {'sha1'|'md5'|'sha256'|'sha512'} algorithm
 * @returns {Promise<string>}
 */
export async function fileHash(filename, algorithm = 'md5') {
  return (
    !isBrowser() &&
    isNode() &&
    new Promise(resolve => {
      const shasum = createHash(algorithm)
      const s = fs.ReadStream(filename)
      s.on('data', data => shasum.update(data))

      // making digest
      s.on('end', () => {
        const hash = shasum.digest('hex')
        return resolve(hash)
      })
    })
  )
}

/**
 * using path.parse
 * @function fileParse
 * @param {String} filePath
 * @returns {import('path').ParsedPath}
 */
export function fileParse(filePath) {
  return isNode() && filePath && parse(filePath)
}

/**
 * @function pathJoin
 * @param {...string} paths
 * @returns {string}
 */
export function pathJoin(...paths) {
  return isNode() && join(...paths)
}

/**
 * using path.extname
 * @function extName
 * @param {string} filePath
 * @returns {string} extension ex: '.png'
 */
export function extName(filePath) {
  return isNode() && filePath && extname(filePath)
}

/**
 * @function fileExists
 * @param {string} filePath
 * @returns {boolean}
 */
export function fileExists(filePath) {
  if (isNode() && filePath) {
    return !!fs.existsSync(filePath)
  }
  return false
}

/**
 * @function deleteFile
 * @param {string} filePath
 * @returns {Promise<Boolean>}
 */
export function deleteFile(filePath) {
  if (isNode() && filePath) {
    if (fileExists(filePath)) fs.unlinkSync(filePath)
    return true
  }
  return false
}

/**
 * @function renameFile
 * @param {String} oldPath
 * @param {String} newPath
 * @param {Boolean} force
 * @returns {Promise<boolean>}
 */
export async function renameFile(oldPath, newPath, force) {
  if (isNode() && oldPath && fileExists(oldPath)) {
    if (force && fileExists(newPath)) fs.unlinkSync(newPath)
    return new Promise(resolve => {
      fs.rename(oldPath, newPath, err => {
        resolve(!err)
        // if (err) resolve(false)
        // else resolve(true)
      })
    })
  }
  return false
}

/**
 * @function copyFile
 * @param {string} source
 * @param {string} target
 * @returns {Promise<boolean>}
 */
export async function copyFile(source, target) {
  if (isBrowser() || !source || !target || !fileExists(source)) return false
  const result = await new Promise(resolve => {
    fs.copyFile(source, target, err => {
      resolve(!err)
      // if (err) resolve(false)
      // else resolve(true)
    })
  })

  return result
}
