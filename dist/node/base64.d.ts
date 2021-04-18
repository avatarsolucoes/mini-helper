/**
 * @description
 * Get image file base64 data
 * @function base64
 * @example
 * await base64('path/demo.png') // 'data:image/png;base64,...'
 */
export declare function base64(fileName: string): Promise<string>;
/**
 * @description
 * Get image file base64 data (synchronous)
 * @function base64Sync
 * @example
 * await base64Sync('path/demo.png') // 'data:image/png;base64,...'
 */
export declare function base64Sync(fileName: string): string;
/**
 * @description
 * Convert base64 to File
 * - 'filename' automatically takes on extension
 * @function base64ToFile
 * @example
 * base64ToFile('data:image/png;base64,...', 'dest/path/here', 'filename');
 */
export declare function base64ToFile(data: string, destPath: string, name: string): Promise<string>;
/**
 * @description
 * Convert base64 to File (synchronous)
 * - 'filename' automatically takes on extension
 * @function base64ToFileSync
 * @example
 * base64ToFileSync('data:image/png;base64,...', 'dest/path/here', 'filename');
 */
export declare function base64ToFileSync(data: string, destPath: string, filename: string): string;
