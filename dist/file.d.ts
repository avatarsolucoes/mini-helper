/**
 * @function fileHash
 * @param {string} filename
 * @param {'sha1'|'md5'|'sha256'|'sha512'} algorithm
 * @returns {Promise<string>|false}
 */
export function fileHash(filename: string, algorithm?: 'sha1' | 'md5' | 'sha256' | 'sha512'): Promise<string> | false;
/**
 * using path.parse
 * @function fileParse
 * @param {String} filePath
 * @returns {import('path').ParsedPath}
 */
export function fileParse(filePath: string): import('path').ParsedPath;
/**
 * using path.parse
 * @function pathJoin
 * @param {Array<string>} paths
 * @returns {String}
 */
export function pathJoin(...paths: Array<string>): string;
/**
 * using path.extname
 * @function extName
 * @param {String} filePath
 * @returns {String} extension ex: '.png'
 */
export function extName(filePath: string): string;
/**
 * @function fileExists
 * @param {string} filePath
 */
export function fileExists(filePath: string): boolean;
/**
 * @function deleteFile
 * @param {string} filePath
 * @returns {Promise<Boolean>}
 */
export function deleteFile(filePath: string): Promise<boolean>;
/**
 * @function renameFile
 * @param {String} oldPath
 * @param {String} newPath
 * @param {Boolean} force
 * @returns {Boolean}
 */
export function renameFile(oldPath: string, newPath: string, force: boolean): boolean;
/**
 * @function copyFile
 * @param {string} source
 * @param {string} target
 * @returns {Promise<boolean>}
 */
export function copyFile(source: string, target: string): Promise<boolean>;
//# sourceMappingURL=file.d.ts.map