import glob from './glob'
/* eslint-disable prefer-destructuring */
export const defaultForbidenChars = "'@#$%¨&*()_+{}?^:><|¹²³£¢¬§ªº°;.,~´`=-"
/**
 * (string) Remove the first character
 * @function rmFirstChar
 * @param {String} str
 * @returns {String} string modified
 */
export function rmFirstChar(str) {
  return str.slice(1)
}

/**
 * (string) Remove the last character
 * @function rmLastChar
 * @param {String} str
 * @returns {String} string modified
 */
export function rmLastChar(element) {
  return element.slice(0, element.length - 1)
}

/**
 * (string) Primeira palavra da sentenca
 * @function firstWord
 * @param {String} text
 * @returns {String}
 * @example
 * firstWord('Leandro Sbrissa') // Leandro
 */
export function firstWord(text) {
  if (!text) return ''
  const fullName = text.trim().split(' ')
  return fullName[0]
}

/**
 * (string) Ultima palavra da sentenca
 * @function lastWord
 * @param {String} text
 * @returns {String}
 * @example
 * lastWord('Leandro Sbrissa') // Sbrissa
 */
export function lastWord(text) {
  if (!text) return ''
  const fullName = text.trim().split(' ')
  return fullName.slice(-1).join(' ')
}

/**
 * @function replaceAll
 * @param {String} str
 * @param {String} needle
 * @param {String} replacement
 * @example
 * replaceAll('T*T', '*', '_') // return 'T_T'
 */
export function replaceAll(str, needle, replacement) {
  if (!str) return ''
  if (Array.isArray(needle)) {
    let rtn = `${str}`
    for (let i = 0; i < needle.length; i++) {
      rtn = replaceAll(rtn, needle[i], replacement)
    }
    return rtn
  }
  return str.split(needle).join(replacement)
}

/**
 * @function removeAll
 * @param {String|Array<string>} str
 * @param {String|Array<string>} chars
 * @returns {String|Array<string>}
 * @example
 * removeAll('TEST#$_', '#$_') // return 'TEST'
 */
export function removeAll(str, chars = defaultForbidenChars, replacement = '') {
  if (!str) return ''
  if (Array.isArray(str)) return str.map(r => removeAll(r, chars, replacement))
  const c = Array.isArray(chars) ? chars : chars.split('')
  let result = str
  for (let i = 0; i < c.length; i++) result = replaceAll(result, c[i], replacement)
  return result
}

/**
 * Primeiras letras em maiuscula
 * @function titleize
 * @param {String} text
 * @returns {String}
 * @example
 * titleize('teste de maiuscula') // Teste de Maiuscula
 */
export function titleize(text) {
  if (!text) return ''
  const cases = ['de', 'do', 'da', 'dos', 'das', 'a', 'o', 'as', 'os', 'e', 'di']
  const words = text.toLowerCase().trim().split(' ')
  return words
    .map(w => {
      if (cases.indexOf(w) < 0) {
        return `${w[0].toUpperCase()}${w.slice(1)}`
      }
      return w
    })
    .join(' ')
}

/**
 * Verify if String is MAC address
 * @function isMAC
 * @param {String} strMac
 * @returns {Boolean}
 */
export function isMAC(strMac) {
  if (!strMac) return false
  if (strMac.indexOf(':') >= 0 && strMac.length !== 17) return false
  if (strMac.indexOf(':') < 0 && strMac.length !== 12) return false
  const re = /^[a-fA-F0-9:]{17}|[a-fA-F0-9]{12}$/g
  return re.test(strMac)
}

export function isHexReg(str) {
  const re = /[0-9A-Fa-f]{6}/g
  return re.test(str)
  // re.lastIndex = 0; // be sure to reset the index after using .text()
}

// export function isHex(h) {
//   const a = parseInt(h, 16)
//   return a.toString(16) === h
// }

/**
 * @function extractHostname
 * @param {String} url
 * @returns {String}
 */
export function extractHostname(url) {
  let hostname
  if (url.indexOf('//') > -1) {
    hostname = url.split('/')[2]
  } else {
    hostname = url.split('/')[0]
  }
  hostname = hostname.split(':')[0]
  hostname = hostname.split('?')[0]
  return hostname
}

/**
 * @function toMask
 * @param {string} mask
 * @param {Number|String} number alphanumeric
 * @returns {String}
 * @example
 * toMask('XXX-XXXX', ABC1234) // ABC-1234
 */
export function toMask(mask, number) {
  if (!number) return ''
  const s = `${number}`
  let r = ''
  for (let im = 0, is = 0; im < mask.length && is < s.length; im++) {
    r += mask.charAt(im) === 'X' ? s.charAt(is++) : mask.charAt(im)
  }
  return r
}

/**
 * @function isValidTime
 * @param {string} str
 * @returns {Boolean}
 */
export function isValidTime(str) {
  return /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(str)
}

/**
 * @function formatBytes
 * @param {number|string} bytes numero em bytes
 * @param {number} decimals casas decimais
 * @example
 * // formatBytes(bytes,decimals)
 * formatBytes(1024);       // 1 KB
 * formatBytes('1024');     // 1 KB
 * formatBytes(1234);       // 1.21 KB
 * formatBytes(1234, 3);    // 1.205 KB
 */
export function formatBytes(bytes, decimals = 2) {
  if (!bytes || bytes === 0) return '0 Bytes'

  const k = 1024
  const b = bytes < 0 ? bytes * -1 : bytes
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(b) / Math.log(k))

  return `${parseFloat((b / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

/**
 * @function camelize
 * @param {String} str
 * {@link https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case StackOverflow}.
 * @example
 * camelize("EquipmentClass name");
 * camelize("Equipment className");
 * camelize("equipment class name");
 * camelize("Equipment Class Name");
 * // all output "equipmentClassName"
 */
export function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase()
    })
    .replace(/\s+/g, '')
}

/**
 * @function urlEncodeObject
 * @param {any} object
 * @returns {string}
 * @example
 * urlEncodeObject({foo: 'fooValue', bar: 'barValue'}) // foo=fooValue&bar=barValue
 */
export function urlEncodeObject(object) {
  if (typeof object !== 'object' || object instanceof Date) return ''
  const result = []
  Object.keys(object).forEach(k => {
    glob && glob.encodeURIComponent && result.push(`${k}=${glob.encodeURIComponent(object[k])}`)
  })
  return result.length ? result.join('&') : ''
}
