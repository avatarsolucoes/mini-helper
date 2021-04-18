import fs from 'fs'
import { extname, join } from 'path'
import { BaseType, MountImgResult } from './types'

function mountImageBase64(filename: string, data: Buffer): string {
  let ext = extname(filename).substr(1)
  if (['png', 'gif', 'jpeg', 'jpg', 'svg'].includes(ext)) {
    if (ext === 'svg') ext = 'svg+xml'
    return `data:image/${ext};base64,${data.toString('base64')}`
  }
  return ''
}

export function mountImg(data: string): MountImgResult {
  const reg = /^data:image\/([\w+]+);base64,([\s\S]+)/
  const match = data.match(reg)
  const baseType: BaseType = { jpeg: 'jpg', 'svg+xml': 'svg' }
  if (!match) throw new TypeError('image base64 data error')
  const extname = baseType[match[1]] || match[1]

  return {
    extname: '.' + extname,
    base64: match[2]
  }
}

/**
 * @description
 * Get file base64 data
 * @function base64
 * @example
 * await base64('path/demo.png') // 'data:image/png;base64,...'
 */
export async function base64(fileName: string): Promise<string> {
  return new Promise(resolve => {
    fs.readFile(fileName, (err, data) => {
      const image = !err && mountImageBase64(fileName, data)
      if (image) resolve(image)
      else resolve((!err && data && data.toString('base64')) || '')
    })
  })
}

/**
 * @description
 * Get image file base64 data (synchronous)
 * @function base64Sync
 * @example
 * await base64Sync('path/demo.png') // 'data:image/png;base64,...'
 */
export function base64Sync(fileName: string): string {
  const data = fs.readFileSync(fileName)
  return data && (mountImageBase64(fileName, data) || data.toString('base64'))
}

/**
 * @description
 * Convert base64 to File
 * - 'filename' automatically takes on extension
 * @function saveImageBase64
 * @example
 * base64ToFile('data:image/png;base64,...', 'dest/path/here', 'filename');
 */
export async function saveImageBase64(
  data: string,
  destPath: string,
  name: string
): Promise<string> {
  const result = mountImg(data)
  const filepath = join(destPath, `${name}${result.extname}`)
  return new Promise(resolve =>
    fs.writeFile(filepath, result.base64, { encoding: 'base64' }, err =>
      resolve(err ? '' : filepath)
    )
  )
}

/**
 * @description
 * Convert base64 to File (synchronous)
 * - 'filename' automatically takes on extension
 * @function saveImageBase64Sync
 * @example
 * base64ToFileSync('data:image/png;base64,...', 'dest/path/here', 'filename');
 */
export function saveImageBase64Sync(data: string, destPath: string, filename: string): string {
  const result = mountImg(data)
  const filepath = join(destPath, `${filename}${result.extname}`)
  fs.writeFileSync(filepath, result.base64, { encoding: 'base64' })
  return filepath
}
