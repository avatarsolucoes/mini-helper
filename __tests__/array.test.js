import { unArray, range, rangeArray, buffToArray, forceArray } from '../src'

describe('Test UTILS', () => {
  it('Deveria retornar um array', done => {
    expect(forceArray(1)).toEqual(expect.arrayContaining([1]))
    expect(forceArray({ prop: 1 })).toEqual(expect.arrayContaining([{ prop: 1 }]))
    expect(forceArray()).toEqual(expect.arrayContaining([]))
    done()
  })

  it('Deveria retornar valor noArray', done => {
    expect(unArray([1])).toEqual(1)
    expect(unArray([])).toEqual(false)
    expect(unArray(null)).toEqual(null)

    done()
  })

  it('Deveria retornar interable range', done => {
    expect(range(1, 3, 1)).toMatchYields([[1], [2], [3]])
    expect(range(1, 3)).toMatchYields([[1], [2], [3]])
    done()
  })

  it('Deveria retornar um rangeArray', done => {
    const expected = [1, 2, 3]
    expect(rangeArray(1, 3, 1)).toEqual(expect.arrayContaining(expected))
    expect(rangeArray(1, 3)).toEqual(expect.arrayContaining(expected))
    done()
  })

  it('Deveria retornar um Array', done => {
    const expected = ['a1', 'a2', 'a3']
    const buf2 = ['a1', 'a2', 'a3']
    const buf3 = 'a1a2a3'
    const buf1 = Buffer.from([0xa1, 0xa2, 0xa3])

    expect(buffToArray(buf1)).toEqual(expect.arrayContaining(expected))
    expect(buffToArray(buf2)).toEqual(expect.arrayContaining(expected))
    expect(buffToArray(buf3)).toEqual(expect.arrayContaining(expected))
    expect(buffToArray()).toEqual(expect.arrayContaining([]))

    done()
  })
})
