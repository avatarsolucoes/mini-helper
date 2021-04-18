import { resolve, dirname, join } from 'path'
import { mountImg } from '../src/node/base64'
import {
  toBase64Img,
  fileExists,
  base64Sync,
  saveImageBase64Sync,
  saveImageBase64,
  base64,
  copyFile
} from '../src/node'

const image = resolve(__dirname, 'avatar-low.png')
const dir = dirname(image)
let imgTestBase64 = ''
let filePath = ''

describe('Test objects', () => {
  it('deveria codificar base64 (toBase64Img)', () => {
    expect(fileExists(image)).toEqual(true)
    expect(toBase64Img(image).startsWith('data:image/png;base64')).toEqual(true)
  })

  it('deveria codificar base64', () => {
    expect(fileExists(image)).toEqual(true)
    imgTestBase64 = base64Sync(image)
    expect(imgTestBase64.startsWith('data:image/png;base64')).toEqual(true)
  })

  it('deveria salvar image de base64', async () => {
    filePath = saveImageBase64Sync(imgTestBase64, dir, 'tmp-created')
    expect(fileExists(filePath)).toEqual(true)

    filePath = await saveImageBase64(imgTestBase64, dir, 'tmp-created1')
    expect(fileExists(filePath)).toEqual(true)

    await copyFile(filePath, join(dir, 'temp-created1.any'))
  })

  it('deveria adquirir base64', async () => {
    let str = await base64(filePath)
    expect(str.startsWith('data:image/png;base64')).toEqual(true)
    str = await base64(join(dir, 'temp-created1.any'))
    expect(typeof str === 'string' && str.length > 50).toBe(true)
    expect(str.startsWith('data:image/png;base64')).toBe(false)
    expect(() => mountImg(str)).toThrow(TypeError)
  })

  it('deveria adquirir base64 svg', async () => {
    imgTestBase64 = base64Sync(join(dir, 'avatar.svg'))
    expect(imgTestBase64.startsWith('data:image/svg+xml;base64')).toEqual(true)

    imgTestBase64 = await base64(join(dir, 'avatar.svg'))
    expect(imgTestBase64.startsWith('data:image/svg+xml;base64')).toEqual(true)
  })
})
