import crypto from 'crypto'
import getRandomValues from 'get-random-values'
import { v4 as uuid } from 'uuid'
import md5 from 'md5'
import chunk from 'chunk'

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 * @function getRandomArbitrary
 * @returns {number}
 */
export function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * @function getRandomInt
 * @param {number} min integer
 * @param {number} max integer
 * @returns {number}
 */
export function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Gerar caracteres aleatorios
 * @function getRamdomStr
 * @param {Number} len tamanho
 * @param {String} wishlist lista de caracteres para utilizar
 * @example
 * getRamdomStr(4,'0123ABCDEF')
 */
export function getRamdomStr(len, whitelist = '123456789ABCEFGHKMPQRSTXYZ') {
  return Array(len)
    .fill('')
    .map(() => {
      // eslint-disable-next-line no-mixed-operators
      const q = Math.floor((getRandomValues(new Uint8Array(1))[0] / (0xff + 1)) * whitelist.length)
      return whitelist[q]
    })
    .join('')
}

export function getInRamdom(object) {
  if (Array.isArray(object)) {
    return object[getRandomInt(0, object.length - 1)]
  }

  if (typeof object === 'object') {
    const arrKeys = Object.keys(object)
    const key = arrKeys[getRandomInt(0, arrKeys.length - 1)]
    if (key in object) return object[key]
  }

  if (typeof object === 'function') return getInRamdom(object())

  const arrstr = (object || '123456789ABCEFGHKMPQRSTXYZ').toString().split('')
  return arrstr[getRandomInt(0, arrstr.length - 1)]
}

/**
 * @function getRamdomHex
 * @param {Number} size - integer (default 16)
 * @returns {String} - HEX
 * @example
 * hexRamdom() // c05662d445cd3988402521922ba16e29
 */
export function getRamdomHex(size = 16) {
  const result = crypto.randomBytes(size)
  return result.toString('hex')
}

export function generateIdPass(payload, secret = '') {
  const uid = uuid()
  const p = JSON.stringify(payload)
  return md5(`${uid}${p}${secret}${getRamdomHex()}`)
}

/**
 * @function hashPassword
 * @param {String} payload
 * @param {String} secret
 * @returns {String} HASH MD5
 */
export function hashPassword(payload, secret = '') {
  return md5(`${payload}${secret}`)
}

/**
 * @function hashMD5
 * @param {String} str
 * @param {Boolean} toBuffer
 */
export function hashMD5(str, toBuffer) {
  const hash = md5(`${str}`)
  return toBuffer ? Buffer.from(chunk(hash, 2)) : hash
}

/**
 * @function isMD5
 * @param {String} inputString
 */
export function isMD5(inputString) {
  // if (typeof inputString !== 'string') return false;
  return /[a-fA-F0-9]{32}/.test(inputString)
}
