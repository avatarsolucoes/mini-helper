import { resolve, dirname } from 'path'
import {
  fileHash,
  extName,
  renameFile,
  fileExists,
  pathJoin,
  copyFile,
  deleteFile,
  fileParse
} from '../src/node'

const image = resolve(__dirname, 'avatar-low.png')

describe('Test files', () => {
  it('deveria gerar hash de arquivo', async () => {
    const hash = await fileHash(image)
    expect(hash).toEqual('c184f24d6c7187d56e44920cc4960b0f')
  })

  it('deveria adquirir extensao do arquivo', () => {
    const ext = extName(image)
    expect(ext).toEqual('.png')
  })

  it('deveria renomear o arquivo', async () => {
    const folder = dirname(image)
    const newcopy = pathJoin(folder, 'copia.png')
    const newname = pathJoin(folder, 'renamed1.png')

    await copyFile(image, newcopy)
    expect(fileExists(newcopy)).toEqual(true)

    await renameFile(newcopy, newname)
    expect(fileExists(newname)).toEqual(true)

    expect(await renameFile(newname, 'renamed.png', true)).toEqual(true)
    expect(fileExists('renamed.png')).toEqual(true)

    expect(await renameFile('any.txt', 'renamed.png', true)).toEqual(false)
  })

  it('deveria deletar arquivos', async () => {
    const folder = dirname(image)
    const newcopy = pathJoin(folder, 'copia.png')
    const newname = pathJoin(folder, 'renamed.png')

    expect(deleteFile(newcopy)).toEqual(true)
    expect(fileExists(newcopy)).toEqual(false)

    expect(deleteFile(newname)).toEqual(true)
    expect(fileExists(newname)).toEqual(false)

    expect(deleteFile(null)).toEqual(false)
  })

  it('parse file', async () => {
    const expected = {
      base: 'avatar-low.png',
      ext: '.png',
      name: 'avatar-low'
    }
    expect(fileParse(image)).toEqual(expect.objectContaining(expected))
  })

  it('nao deveria deletar', async () => {
    expect(deleteFile('abcd.txt')).toEqual(true)
    expect(deleteFile(null)).toEqual(false)
  })

  it('nao deveria existir arquivo', async () => {
    expect(fileExists('abcd.txt')).toBe(false)
    expect(fileExists(null)).toBe(false)
  })

  it('deveria falhar copia de arquivo', async () => {
    expect(await copyFile('abcd.txt', 'dcba.txt')).toBe(false)
  })
})
