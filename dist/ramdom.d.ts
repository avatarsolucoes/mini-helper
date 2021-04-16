/**
 * Returns a random number between min (inclusive) and max (exclusive)
 * @function getRandomArbitrary
 * @returns {number}
 */
export function getRandomArbitrary(min: any, max: any): number;
/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * @function getRandomInt
 * @param {number} min integer
 * @param {number} max integer
 * @returns {number}
 */
export function getRandomInt(min: number, max: number): number;
/**
 * Gerar caracteres aleatorios
 * @function getRamdomStr
 * @param {Number} len tamanho
 * @param {String} wishlist lista de caracteres para utilizar
 * @example
 * getRamdomStr(4,'0123ABCDEF')
 */
export function getRamdomStr(len: number, whitelist?: string): string;
export function getInRamdom(object: any): any;
/**
 * @function getRamdomHex
 * @param {Number} size - integer (default 16)
 * @returns {String} - HEX
 * @example
 * getRamdomHex() // c05662d445cd3988402521922ba16e29
 */
export function getRamdomHex(size?: number): string;
export function generateIdPass(payload: any, secret?: string): string;
/**
 * @function hashPassword
 * @param {String} payload
 * @param {String} secret
 * @returns {String} HASH MD5
 */
export function hashPassword(payload: string, secret?: string): string;
/**
 * @function hashMD5
 * @param {String} str
 * @param {Boolean} toBuffer
 */
export function hashMD5(str: string, toBuffer: boolean): string | Buffer;
/**
 * @function isMD5
 * @param {String} inputString
 */
export function isMD5(inputString: string): boolean;
