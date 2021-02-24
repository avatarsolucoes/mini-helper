export { unArray, buffToArray, range, rangeArray } from './array'
export { forceArray } from './arrayts'
export { medianInArray, averageInArray, sumArray } from './array'
export {
  defaultForbidenChars,
  extractHostname,
  firstWord,
  lastWord,
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
  formatBytes,
  urlEncodeObject,
  camelize,
  isEmail,
  validURL
} from './string'

export { getValue, objectHasKeys, mirrorNotNullObject } from './objects'
export {
  compareValues,
  objectWithoutProperties,
  onlyWithProperties,
  isObject,
  mergeDeep
} from './object'
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

// export { convertSvgToPng, toBase64Img } from './image'
// export { deleteFile, extName, fileExists, fileHash, fileParse, pathJoin, renameFile } from './file'
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

export { toBase64Img } from './image'

export {
  fileExists,
  fileHash,
  extName,
  renameFile,
  deleteFile,
  fileParse,
  pathJoin,
  copyFile
} from './file'

/**
 * @typedef {import('./theme').ITheme} ITheme
 * @typedef {import('./theme').IThemeAssets} IThemeAssets
 * @exports ITheme
 * @exports IThemeAssets
 */

export { defaultTheme } from './theme'
