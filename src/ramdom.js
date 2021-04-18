import { isModuleResolve } from './variables'
import md5 from 'md5'
import { chunk } from './chunk'
import { v4 as uuid } from 'uuid'

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
  const m = Math.ceil(min)
  return Math.floor(Math.random() * (Math.floor(max) - m + 1)) + m
}

/**
 * @deprecated Will be depreciated in the next versions
 * @description
 * Generates random characters.
 * Will be depreciated in the next versions by using external module 'get-random-values'
 * @function getRamdomStr
 * @param {Number} len tamanho
 * @param {string} wishlist lista de caracteres para utilizar
 * @example
 * getRamdomStr(4,'0123ABCDEF')
 */
export function getRamdomStr(len, whitelist = '123456789ABCEFGHKMPQRSTXYZ') {
  try {
    const getRandomValues = isModuleResolve('get-random-values') && require('get-random-values')
    return (
      getRandomValues &&
      Array(len)
        .fill('')
        .map(() => {
          // eslint-disable-next-line no-mixed-operators
          const q = Math.floor(
            (getRandomValues(new Uint8Array(1))[0] / (0xff + 1)) * whitelist.length
          )
          return whitelist[q]
        })
        .join('')
    )
  } catch {
    throw new Error('install module "get-random-values"')
  }
}

export function getInRamdom(object) {
  if (Array.isArray(object)) {
    return getInRamdom(object[getRandomInt(0, object.length - 1)])
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
 * @returns {string} - HEX
 * @example
 * getRamdomHex() // c05662d445cd3988402521922ba16e29
 */
export function getRamdomHex(size = 16) {
  const { randomBytes } = require('crypto')
  const result = randomBytes(size)
  return result.toString('hex')
}

export function generateIdPass(payload, secret = '') {
  const uid = uuid()
  const p = JSON.stringify(payload)
  return md5(`${uid}${p}${secret}${getRamdomHex()}`)
}

/**
 * @function hashPassword
 * @param {string} payload
 * @param {string} secret
 * @returns {string} HASH MD5
 */
export function hashPassword(payload, secret = '') {
  return md5(`${payload}${secret}`)
}

/**
 * @function hashMD5
 * @param {string} str
 * @param {boolean} toBuffer
 * @returns {string|Buffer}
 */
export function hashMD5(str, toBuffer) {
  const hash = md5(`${str}`)
  return toBuffer ? Buffer.from(chunk(hash, 2)) : hash
}

/**
 * @function isMD5
 * @param {string} inputString
 */
export function isMD5(inputString) {
  return /[a-fA-F0-9]{32}/.test(inputString)
}
