export function isModuleResolve(moduleName: any): boolean;
export function isDefined(v: any): boolean;
export function notNull(value: any, defaultValue?: boolean): any;
/**
 * Convert Int To String(Hex)
 * @param {Number} int
 * @param {Number} size integer
 * @param {Boolean} noLeftZero
 * @returns {string} hex(number)
 */
export function intToHex(int: number, size: number, noLeftZero: boolean): string;
/**
 * Convert Int To String(Hex)
 * @param {Number} int
 * @returns {string} hex(number)
 */
export function intToHex2(int: number): string;
/**
 * @function tryInteger
 * @param {any} value
 * @returns {Number|False}
 */
export function tryInteger(value: any): number | any;
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
export function hexToAlphaNumeric(hexx: Buffer | string | Array<string>, preserve: boolean): string;
export function hex2a(hexx: any): string;
/**
 * Convert HEX To String UTF-8
 * @param {Buffer} hex
 * @returns {string} ASCII(hex)
 */
export function hexToASC(hex: Buffer): string;
/**
 * Convert ASCII To String(Hex)
 * @param {String} str
 * @returns {string} hex(number)
 */
export function ASCToHex(str: string): string;
/**
 * @function hexToInt
 * @param {String | Array} strhex
 * @returns {Number} decimal ASCII
 * @example
 * hexToInt('41'); // return 'A'
 * hexToInt(['41','42','43']); // return ['A','B','C']
 */
export function hexToInt(strhex: string | any[]): number;
