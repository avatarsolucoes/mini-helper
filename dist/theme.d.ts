export interface IThemeAssets {
    urlLogo?: string;
}
export interface ITheme {
    primary: string;
    secundary: string;
    contrast: string;
    text: string;
    rounded?: number;
    assets?: IThemeAssets;
}
export declare const defaultTheme: ITheme;
