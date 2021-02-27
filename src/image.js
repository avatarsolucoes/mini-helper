// import sharp from 'sharp'
// import base64Img from 'base64-img'

// /**
//  * @function convertSvgToPng
//  * @param {String} source
//  * @param {String} dest
//  */
// export async function convertSvgToPng(source, dest) {
//   try {
//     const converted = await sharp(source).png().toFile(dest)
//     return converted
//   } catch (_error) {
//     return false
//   }
// }

/**
 * @function toBase64Img
 * @param {String} filePath
 */
export function toBase64Img(filePath) {
  const base64Img = require('base64-img')
  return base64Img && base64Img.base64Sync(filePath)
}
