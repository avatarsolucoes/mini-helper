/* eslint-disable import/no-extraneous-dependencies */
import { isModuleResolve } from '../variables'

/**
 * @function toBase64Img
 */
export function toBase64Img(filePath) {
  const base64 = isModuleResolve('base64-img') && require('base64-img')
  return base64 && base64.base64Sync(filePath)
  // }
}
