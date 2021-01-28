export interface IThemeAssets {
  urlLogo?: string
}

export interface ITheme {
  primary: string
  secundary: string
  contrast: string
  text: string
  rounded?: number
  assets?: IThemeAssets
}

export const defaultTheme: ITheme = {
  primary: '#000',
  secundary: '#0c0',
  contrast: '#00C',
  text: '#000',
  rounded: 0
}
