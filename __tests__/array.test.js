import {
  forceArray,
  unArray,
  range,
  rangeArray,
  buffToArray,
  compareValues,
  medianInArray,
  averageInArray,
  sumArray
} from '../src'

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

  it('Deveria classificar um Array', done => {
    const arrtest = [{ id: 1 }, { id: 3 }, { id: 2 }]

    expect(arrtest.sort(compareValues('id', 'asc'))).toEqual(
      expect.arrayContaining([{ id: 1 }, { id: 2 }, { id: 3 }])
    )
    expect(arrtest.sort(compareValues('id', 'desc'))).toEqual(
      expect.arrayContaining([{ id: 3 }, { id: 2 }, { id: 1 }])
    )

    done()
  })

  it('Deveria retornar mediana', done => {
    expect(medianInArray('2')).toEqual(0)
    expect(medianInArray(2)).toEqual(2)
    expect(medianInArray([2, 8, 2])).toEqual(2)
    expect(medianInArray([2, 8, 2, 8])).toEqual(5)
    expect(medianInArray([2, 8, 2, 8, 0], true)).toEqual(2)
    expect(medianInArray([2, 8, 2, 8, 0])).toEqual(5)

    done()
  })

  it('Deveria retornar media', done => {
    expect(averageInArray('2')).toEqual(0)
    expect(averageInArray(2)).toEqual(2)
    expect(averageInArray([2, 8, 2])).toEqual(4)
    expect(averageInArray([2, 8, 2, 8, 10])).toEqual(6)
    expect(averageInArray([2, 8, 2, 8, 0], true)).toEqual(4)
    expect(averageInArray([2, 8, 2, 8, 0])).toEqual(5)

    done()
  })

  it('Deveria somar elementos array', done => {
    expect(sumArray([2, 4, 2])).toEqual(8)
    expect(sumArray([2, 4, '2'], true)).toEqual(8)
    expect(sumArray([2, 4, '2'], false)).toEqual(6)
    expect(sumArray(['1', 'teste', 2], true)).toEqual(3)
    expect(sumArray(['1', 'teste', 2, null], true)).toEqual(3)
    done()
  })
})
