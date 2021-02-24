/**
 * (string) Remove the first character
 * @function rmFirstChar
 * @param {String} str
 * @returns {String} string modified
 */
export function rmFirstChar(str: string): string;
/**
 * (string) Remove the last character
 * @function rmLastChar
 * @param {String} str
 * @returns {String} string modified
 */
export function rmLastChar(element: any): string;
/**
 * (string) Primeira palavra da sentenca
 * @function firstWord
 * @param {String} text
 * @returns {String}
 * @example
 * firstWord('Leandro Sbrissa') // Leandro
 */
export function firstWord(text: string): string;
/**
 * (string) Ultima palavra da sentenca
 * @function lastWord
 * @param {String} text
 * @returns {String}
 * @example
 * lastWord('Leandro Sbrissa') // Sbrissa
 */
export function lastWord(text: string): string;
/**
 * @function replaceAll
 * @param {String} str
 * @param {String} needle
 * @param {String} replacement
 * @example
 * replaceAll('T*T', '*', '_') // return 'T_T'
 */
export function replaceAll(str: string, needle: string, replacement: string): string;
/**
 * @function removeAll
 * @param {String|Array<string>} str
 * @param {String|Array<string>} chars
 * @returns {String|Array<string>}
 * @example
 * removeAll('TEST#$_', '#$_') // return 'TEST'
 */
export function removeAll(str: string | Array<string>, chars?: string | Array<string>, replacement?: string): string | Array<string>;
/**
 * Primeiras letras em maiuscula
 * @function titleize
 * @param {String} text
 * @returns {String}
 * @example
 * titleize('teste de maiuscula') // Teste de Maiuscula
 */
export function titleize(text: string): string;
/**
 * Verify if String is MAC address
 * @function isMAC
 * @param {String} strMac
 * @returns {Boolean}
 */
export function isMAC(strMac: string): boolean;
export function isHexReg(str: any): boolean;
/**
 * @function extractHostname
 * @param {String} url
 * @returns {String}
 */
export function extractHostname(url: string): string;
/**
 * @function toMask
 * @param {string} mask
 * @param {Number|String} number alphanumeric
 * @returns {String}
 * @example
 * toMask('XXX-XXXX', ABC1234) // ABC-1234
 */
export function toMask(mask: string, number: number | string): string;
/**
 * @function isValidTime
 * @param {string} str
 * @returns {Boolean}
 */
export function isValidTime(str: string): boolean;
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
export function formatBytes(bytes: number | string, decimals?: number): string;
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
export function camelize(str: string): string;
/**
 * @function urlEncodeObject
 * @param {any} object
 * @returns {string}
 * @example
 * urlEncodeObject({foo: 'fooValue', bar: 'barValue'}) // foo=fooValue&bar=barValue
 */
export function urlEncodeObject(object: any): string;
/**
 * @function isEmail
 * @param {String} value e-mail string
 * @returns {boolean}
 */
export function isEmail(value: string): boolean;
/**
 * @function validURL
 * @param {string|Array<string>} str
 * @returns {boolean|Array<boolean>}
 * @example
 * validURL('http://example.com') // true
 * validURL(['http://example1.com', 'abcde']) // [true, false]
 */
export function validURL(str: string | Array<string>): boolean | Array<boolean>;
export const defaultForbidenChars: "'@#$%¨&*()_+{}?^:><|¹²³£¢¬§ªº°;.,~´`=-";
//# sourceMappingURL=string.d.ts.map