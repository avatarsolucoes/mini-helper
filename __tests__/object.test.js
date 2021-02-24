import {
  getValue,
  mergeDeep,
  objectHasKeys,
  mirrorNotNullObject,
  objectWithoutProperties,
  onlyWithProperties,
  compareValues
} from '../src'

describe('Test objects', function () {
  it('should get a value of a object', () => {
    const obj = {
      test: 'test-value',
      test1: null
    }
    expect(getValue(obj, 'test')).toBe('test-value')
    expect(getValue(obj, 'teste')).toBe(undefined)
    expect(getValue(obj, 'teste', 'testado')).toBe('testado')
    expect(getValue(null, 'test', 'test')).toBe('test')
    expect(getValue(obj, 'test', 'test')).toBe('test-value')
    expect(getValue(obj, undefined, 'test')).toBe('test')
    expect(getValue(obj, 'test1', 'test')).toBe('test')
  })

  it('deveria testar objectHasKeys', () => {
    const obj = { a: 1, b: 2 }
    expect(objectHasKeys(obj, ['b', 'c'])).toEqual(true)
    expect(objectHasKeys(obj, ['c'])).toEqual(false)
  })

  it('should be merged object', () => {
    const expected = { a: 'test-a', b: 'test-b' }
    const a = {
      a: 'test-a',
      c: {
        ac: true
      }
    }
    expect(mergeDeep(a, { b: 'test-b' })).toEqual(expect.objectContaining(expected))

    expected.c = { ac: true, bc: true }
    expect(mergeDeep(a, { b: 'test-b', c: { bc: true } })).toEqual(
      expect.objectContaining(expected)
    )
  })

  it('deveria espelhar objeto', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 1, c: 3, b: null }
    const expected = { a: 1, b: 2 }
    expect(mirrorNotNullObject(obj1, obj2)).toEqual(expect.objectContaining(expected))
    expect(mirrorNotNullObject({}, obj2)).toEqual(expect.objectContaining({}))
    expect(mirrorNotNullObject(null, false)).toEqual(expect.objectContaining({}))
  })

  it('deveria remover propriedade do objeto', () => {
    const obj1 = { a: 1, b: 2, c: 3 }
    const expected = { a: 1, b: 2 }
    expect(objectWithoutProperties(obj1, ['c'])).toEqual(expect.objectContaining(expected))
  })

  it('deveria retorrnar apenas propriedade do objeto', () => {
    const obj1 = { a: 1, b: 2, c: 3 }
    const expected = { b: 2 }
    expect(onlyWithProperties(obj1, ['b'])).toEqual(expect.objectContaining(expected))
    expect(onlyWithProperties(obj1, { b: 1 })).toEqual(expect.objectContaining(expected))
    expect(onlyWithProperties(obj1, 'b')).toEqual(expect.objectContaining(expected))
    expect(onlyWithProperties('obj1', 'b')).toEqual(expect.objectContaining({}))
  })

  it('deveria classsificar um array de objetos', () => {
    const arr = [
      { a: 'A', b: 1 },
      { a: 'B', b: 3 },
      { a: 'C', b: 2 }
    ]
    expect(arr.sort(compareValues('a', 'desc'))).toEqual([
      { a: 'C', b: 2 },
      { a: 'B', b: 3 },
      { a: 'A', b: 1 }
    ])
    expect(arr.sort(compareValues('b', 'asc'))).toEqual([
      { a: 'A', b: 1 },
      { a: 'C', b: 2 },
      { a: 'B', b: 3 }
    ])

    expect(
      [{ a: 'C', b: 3 }, { a: 'A', b: 1 }, { a: 'B' }].sort(compareValues('b', 'asc'))
    ).toEqual([{ a: 'A', b: 1 }, { a: 'C', b: 3 }, { a: 'B' }])
  })
})
