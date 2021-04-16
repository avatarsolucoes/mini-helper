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
 * @returns {Promise<string>|false}
 */
export async function fileHash(filename, algorithm = 'md5') {
  if (isBrowser()) return false
  const result = new Promise((resolve, reject) => {
    try {
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
  if (isNode()) {
    return filePath && parse(filePath)
  }
}

/**
 * @function pathJoin
 * @param {...string} paths
 * @returns {string}
 */
export function pathJoin(...paths) {
  if (isNode()) {
    return join(...paths)
  }
}

/**
 * using path.extname
 * @function extName
 * @param {string} filePath
 * @returns {string} extension ex: '.png'
 */
export function extName(filePath) {
  if (isNode()) {
    return extname(filePath) || ''
  }
}

/**
 * @function fileExists
 * @param {string} filePath
 * @returns {boolean}
 */
export function fileExists(filePath) {
  try {
    if (isNode()) {
      return !!fs.existsSync(filePath)
    }
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
    if (isNode() && fileExists(filePath)) fs.unlinkSync(filePath)
    return true
  } catch (_error) {
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
    if (isNode()) {
      if (force && fileExists(newPath)) {
        fs.unlinkSync(newPath)
      }
      fs.renameSync(oldPath, newPath)
      return true
    }
    return false
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
    fs.copyFile(source, target, err => {
      if (err) return resolve(false)
      return resolve(true)
    })
  })
  return result
}
