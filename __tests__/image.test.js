import { resolve } from 'path'
import { toBase64Img, fileExists } from '../src'

const image = resolve(__dirname, 'avatar-low.png')

describe('Test objects', () => {
  it('deveria codificar base64', () => {
    expect(fileExists(image)).toEqual(true)
    expect(toBase64Img(image).startsWith('data:image/png;base64')).toEqual(true)
  })
})
