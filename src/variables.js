import { chunk } from './chunk'

export function isModuleResolve(moduleName) {
  try {
    return !!require.resolve(moduleName)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`module '${moduleName}' is not found`)
    return false
  }
}

/**
 * @description
 * Checks if variable has been set
 * @function isDefined
 * @param {any} v
 * @returns {boolean}
 */
export function isDefined(v) {
  return !!(v !== null && typeof v !== 'undefined')
}

/**
 * @description
 * Determines default value for undefined variable
 * @function notNull
 * @param {any} value
 * @param {any} defaultValue
 * @returns {any}
 */
export function notNull(value, defaultValue = true) {
  return !isDefined(value) ? defaultValue : value
}

/**
 * Convert Int To String(Hex)
 * @param {number} int
 * @param {number} size integer
 * @param {Boolean} noLeftZero
 * @returns {string} hex(number)
 */
export function intToHex(int, size, noLeftZero) {
  const rmL = s => s.replace(/^0+/, '')
  const num = Number(int) || 0
  const hex = num.toString(16).toLocaleUpperCase()
  const len = hex.length % 2 !== 0 ? hex.length + 1 : hex.length
  return noLeftZero ? rmL(hex) : hex.padStart(size || len, '0')
}

/**
 * Convert Int To String(Hex)
 * @param {number} int
 * @returns {string} hex(number)
 */
export function intToHex2(int) {
  const num = Number(int) || 0
  const hex = num.toString(16).toLocaleUpperCase()
  const len = hex.length % 2 !== 0 ? hex.length + 1 : hex.length
  return hex.padStart(len, '0')
}

/**
 * @function tryInteger
 * @param {number|string} value
 * @returns {Number|False}
 */
export function tryInteger(value) {
  const numero = parseInt(`${value}`, 10)
  return Number.isInteger(numero) || numero <= 0 ? numero : 0
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
  if (!hexx) return ''
  let hex = `${hexx}`
  if (hexx instanceof Buffer) hex = hexx.toString('hex').toUpperCase()
  if (Array.isArray(hexx)) hex = hexx.join('').toUpperCase()
  hex = chunk(hex, 2)
  let result = ''
  for (let i = 0; i < hex.length; i++) {
    const h = hex[i]
    const num = hexToInt(h)
    if (preserve) {
      result += num >= 40 && num <= 126 ? String.fromCharCode(num) : ' '
    } else if (num >= 40 && num <= 126) result += String.fromCharCode(num)
  }
  return result
}

export function hex2Char(hexx) {
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
 * @param {string} str
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
 * @param {string | Array<string>} strhex
 * @returns {number} decimal ASCII
 * @example
 * hexToInt('41'); // return 'A'
 * hexToInt(['41','42','43']); // return ['A','B','C']
 */
export function hexToInt(strhex) {
  if (Array.isArray(strhex)) return strhex.map(item => hexToInt(item))
  return parseInt(strhex, 16) || 0
}
