export function isDefined(v) {
  try {
    return !!(v !== null && v !== undefined)
  } catch (error) {
    return false
  }
}

export function notNull(value, defaultValue = true) {
  return value === undefined || value === null ? defaultValue : value
}

/**
 * Convert Int To String(Hex)
 * @param {Number} int
 * @param {Number} size integer
 * @param {Boolean} noLeftZero
 * @returns {string} hex(number)
 */
export function intToHex(int, size, noLeftZero) {
  const rmL = s => s.replace(/^0+/, '')
  try {
    const hex = Number(int).toString(16).toLocaleUpperCase()
    const len = hex.length % 2 !== 0 ? hex.length + 1 : hex.length
    return noLeftZero ? rmL(hex) : hex.padStart(size || len, '0')
  } catch (e) {
    const rtn = '00'
    return noLeftZero ? rmL(rtn) : rtn.padStart(size || 2, '0')
  }
}

/**
 * Convert Int To String(Hex)
 * @param {Number} int
 * @returns {string} hex(number)
 */
export function intToHex2(int) {
  try {
    const hex = Number(int).toString(16).toLocaleUpperCase()
    const len = hex.length % 2 !== 0 ? hex.length + 1 : hex.length
    return hex.padStart(len, '0')
  } catch (e) {
    return `0${(0).toString(16)}`.slice(-2).toUpperCase()
  }
}
/**
 * @function tryInteger
 * @param {any} value
 * @returns {Number|False}
 */
export function tryInteger(value) {
  const numero = parseInt(value, 10)
  if (Number.isInteger(numero) || numero <= 0) return numero
  return false
}

/**
 * Converte Hexadecimal em Alphanumeric String
 * @function hexToAlphaNumeric
 * @param {Buffer | String | Array<String>} hexx
 * @param {Boolean} preserve se true converte invalid ALPHANUMERIC in space
 * @returns {String} hexadecimal string
 * @example
 * hexToAlphaNumeric('414243') // return 'ABC'
 * hexToAlphaNumeric('413943', true) // return 'A C'
 */
export function hexToAlphaNumeric(hexx, preserve) {
  try {
    if (!hexx) return ''
    let hex = ''
    if (hexx instanceof Buffer) hex = hexx.toString('hex').toUpperCase()
    if (Array.isArray(hexx)) hex = hexx.join('').toUpperCase()
    hex = require('chunk')(hex, 2)
    let result = ''
    for (let i = 0; i < hex.length; i++) {
      const h = hex[i]
      const num = hexToInt(h)
      if (preserve) {
        result += num >= 40 && num <= 126 ? String.fromCharCode(num) : ' '
      } else if (num >= 40 && num <= 126) result += String.fromCharCode(num)
    }
    return result
  } catch (error) {
    throw new Error('install module "chunk"')
  }
}

export function hex2a(hexx) {
  const hex = hexx.toString() // force conversion
  let str = ''
  for (let i = 0; i < hex.length && hex.substr(i, 2) !== '00'; i += 2) {
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16))
  }
  return str
}

/**
 * Convert HEX To String UTF-8
 * @param {Buffer} hex
 * @returns {string} ASCII(hex)
 */
export function hexToASC(hex) {
  try {
    if (hex instanceof Buffer) {
      return hex.toString('utf8')
    }
    if (Array.isArray(hex)) return Buffer.from(hex.join(''), 'hex').toString('utf8')
    return Buffer.from(hex, 'hex').toString('utf8')
  } catch (error) {
    return ''
  }
}

/**
 * Convert ASCII To String(Hex)
 * @param {String} str
 * @returns {string} hex(number)
 */
export function ASCToHex(str) {
  const arr1 = []
  for (let n = 0, l = str.length; n < l; n++) {
    const hex = Number(str.charCodeAt(n)).toString(16)
    arr1.push(hex)
  }
  return arr1.join('')
}

/**
 * @function hexToInt
 * @param {String | Array} strhex
 * @returns {Number} decimal ASCII
 * @example
 * hexToInt('41'); // return 'A'
 * hexToInt(['41','42','43']); // return ['A','B','C']
 */
export function hexToInt(strhex) {
  if (Array.isArray(strhex)) return strhex.map(item => hexToInt(item))
  try {
    const result = parseInt(strhex, 16)
    return result
  } catch (error) {
    return 0
  }
}
