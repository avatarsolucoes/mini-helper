import {
  rmFirstChar,
  rmLastChar,
  firstWord,
  replaceAll,
  removeAll,
  titleize,
  isMAC,
  isHexReg,
  // isHex
  extractHostname,
  toMask,
  isValidTime
} from '../src/string'

describe('Test UTILS', () => {
  it('Deveria remover *', done => {
    expect(removeAll('TEST#$_', '#$_')).toEqual('TEST')
    expect(removeAll('TEST#$_', '#$_', '0')).toEqual('TEST000')
    expect(removeAll('TEST#$_')).toEqual('TEST')
    expect(removeAll('TEST#$_', ['#', '$', '_'])).toEqual('TEST')
    expect(removeAll('')).toEqual('')
    expect(removeAll(['TEST#$_', 'TEST@'])).toEqual(expect.arrayContaining(['TEST', 'TEST']))
    done()
  })

  it('Deveria remover primeiro caractere', done => {
    expect(rmFirstChar('test')).toEqual('est')
    done()
  })

  it('Deveria remover ultimo caractere', done => {
    expect(rmLastChar('test')).toEqual('tes')
    done()
  })

  it('Deveria retornar primeira palavra', done => {
    expect(firstWord('primeiro segundo')).toEqual('primeiro')
    expect(firstWord('primeiro')).toEqual('primeiro')
    expect(firstWord('')).toEqual('')
    done()
  })

  it('Deveria substituir', done => {
    expect(replaceAll('primeiro segundo', ' ')).toEqual('primeiro,segundo')
    expect(replaceAll('primeiro segundo', ' ', '')).toEqual('primeirosegundo')
    expect(replaceAll('primeiro segundo', [' ', 'e'], '')).toEqual('primirosgundo')
    expect(replaceAll('')).toEqual('')
    done()
  })

  it('Deveria retornar titulo', done => {
    expect(titleize('primeiro segundo')).toEqual('Primeiro Segundo')
    expect(titleize('fulano dos santos')).toEqual('Fulano dos Santos')
    expect(titleize('')).toEqual('')
    done()
  })

  it('Deveria validar MAC Address', done => {
    expect(isMAC('primeiro segundo')).toEqual(false)
    expect(isMAC('A1B2C3D4E5F6')).toEqual(true)
    expect(isMAC('A1:B2:C3:D4:E5:F6')).toEqual(true)
    expect(isMAC('A1:B2:C3:D4:E5:F6:AA')).toEqual(false)
    expect(isMAC('')).toEqual(false)
    done()
  })

  it('Deveria validar isHexReg', done => {
    expect(isHexReg('primeiro segundo')).toEqual(false)
    expect(isHexReg('A1B2C3')).toEqual(true)
    expect(isHexReg('')).toEqual(false)
    done()
  })

  // it('Deveria validar isHex', (done) => {
  //   expect(isHex('primeiro segundo')).toEqual(false)
  //   expect(isHex('01')).toEqual(true)
  //   expect(isHex('')).toEqual(false)
  //   done()
  // })

  it('Deveria extrair host', done => {
    expect(extractHostname('http://localhost:3030')).toEqual('localhost')
    expect(extractHostname('')).toEqual('')
    done()
  })

  it('Deveria retornar mask', done => {
    expect(toMask('XXX-XXXX', 'ABC1234')).toEqual('ABC-1234')
    expect(toMask('')).toEqual('')
    done()
  })

  it('Deveria validat time', done => {
    expect(isValidTime('22:59:59')).toEqual(true)
    expect(isValidTime('25:60:60')).toEqual(false)
    expect(isValidTime('')).toEqual(false)
    done()
  })
})
