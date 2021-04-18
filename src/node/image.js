import { base64Sync } from './base64'

/**
 * @deprecated use base64Sync
 * @function toBase64Img
 * @param {string} filePath
 * @returns {string}
 */
export function toBase64Img(filePath) {
  return base64Sync(filePath)
}
