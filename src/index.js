export { unArray, buffToArray, range, rangeArray } from './array'
export { forceArray } from './arrayts'
export {
  defaultForbidenChars,
  extractHostname,
  firstWord,
  // isHex,
  isHexReg,
  isMAC,
  isValidTime,
  removeAll,
  replaceAll,
  rmFirstChar,
  rmLastChar,
  titleize,
  toMask,
  urlEncodeObject
} from './string'

export { getValue, objectHasKeys } from './objects'
export { compareValues, objectWithoutProperties, onlyWithProperties } from './object'
export { round, round2, round3 } from './number'
export {
  generateIdPass,
  getInRamdom,
  getRamdomHex,
  getRamdomStr,
  getRandomArbitrary,
  getRandomInt,
  hashMD5,
  hashPassword,
  isMD5
} from './ramdom'

export { convertSvgToPng, toBase64Img } from './image'
export { deleteFile, extName, fileExists, fileHash, fileParse, pathJoin, renameFile } from './file'
export {
  dateToStrTimeZone,
  diffExpires,
  extractOfDateTime,
  getUpTime,
  rangedMonth,
  strDateFromTo,
  timeRest
} from './date'

export {
  ASCToHex,
  hex2a,
  hexToASC,
  hexToAlphaNumeric,
  hexToInt,
  intToHex,
  intToHex2,
  isDefined,
  notNull,
  tryInteger
} from './variables'

/**
 * @typedef {import('./theme').ITheme} ITheme
 * @typedef {import('./theme').IThemeAssets} IThemeAssets
 * @exports ITheme
 * @exports IThemeAssets
 */

export { defaultTheme } from './theme'
