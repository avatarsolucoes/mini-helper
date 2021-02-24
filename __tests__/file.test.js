import { resolve, dirname } from 'path'
import { fileHash, extName, renameFile, fileExists, pathJoin, copyFile, deleteFile } from '../src'

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
    const newname = pathJoin(folder, 'renamed.png')
    await copyFile(image, newcopy)
    expect(fileExists(newcopy)).toEqual(true)
    renameFile(newcopy, newname)
    expect(fileExists(newname)).toEqual(true)
  })

  it('deveria deletar arquivos', async () => {
    const folder = dirname(image)
    const newcopy = pathJoin(folder, 'copia.png')
    const newname = pathJoin(folder, 'renamed.png')

    expect(await deleteFile(newcopy)).toEqual(true)
    expect(fileExists(newcopy)).toEqual(false)

    expect(await deleteFile(newname)).toEqual(true)
    expect(fileExists(newname)).toEqual(false)
  })
})
