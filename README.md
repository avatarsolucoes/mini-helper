<p align="center">
  <img src="https://avatarsolucoesdigitais.com.br/images/avatar-git.svg" height="72" width="256" alt="Avatar Solucoes Digitais" />
</p>

# mini-helper
![standard-image](https://img.shields.io/badge/code%20style-standard-brightgreen.svg) [![NPM](https://img.shields.io/npm/v/mini-helper.svg)](https://www.npmjs.com/package/mini-helper) [![Coverage Status](https://coveralls.io/repos/github/avatarsolucoes/mini-helper/badge.svg?branch=main)](https://coveralls.io/github/avatarsolucoes/mini-helper?branch=main)

Small JavaScript library. Just some useful functions
:) is typed

## install
```
yarn add mini-helper
```
or
```
npm install mini-helper --save
```

### test
```
yarn install
yarn test
```


## some things

#### Environment
Checks if execution is on **node** or **browser**
```js
import { isNode, isBrowser } from 'mini-helper'

console.log(isNode()) // boolean
console.log(isBrowser()) // boolean
```

#### Array
Forces a variable into an array
```js
import { forceArray } from 'mini-helper'

forceArray('a') // ['a']
forceArray(['a']) // ['a']
```

#### String
```js
import { removeAll, urlEncodeObject } from 'mini-helper'

removeAll('TEST#$_', '#$_') // return 'TEST'

urlEncodeObject({foo: 'fooValue', bar: 'barValue'}) // foo=fooValue&bar=barValue
```

#### Number
```js
import { round } from 'mini-helper'

round(1234.5678, 1); // 1234.6
```

#### Object
```js
import { isObject, compareValues } from 'mini-helper'

isObject({a:1}) // true
isObject([{a:1}]) // false

// Sorts array of objects
const myArray = [
  { a: 'A', b: 1 },
  { a: 'B', b: 3 },
  { a: 'C', b: 2 }
]

const sorted = myArray.sort(compareValues('a', 'desc')); 
// sorted = [
//   { a: 'C', b: 2 },
//   { a: 'B', b: 3 },
//   { a: 'A', b: 1 }
// ]

```

#### Image
```js
import { toBase64Img } from 'mini-helper'

const filePath = 'path/to/image.png'
const stringBase64 = toBase64Img(filePath) // return -> string base64

```

#### File
```js
import { renameFile, copyFile, deleteFile } from 'mini-helper'

renameFile(oldPath, newPath)

copyFile(source, target)

deleteFile(filePath)

```

#### Date
```js
import { dateToStrTimeZone, strDateFromTo } from 'mini-helper'

dateToStrTimeZone(new Date('12/10/2021 08:00:00'), 'YYYY-MM-DD HH:mm:ss', 'America/Fortaleza'); // '2021-12-10 05:00:00'
strDateFromTo('01/12/21', 'DD/MM/YY', 'YYYY-MM-DD') // 2021-12-01
```

#### Variable
```js
import { isDefined, hexToAlphaNumeric } from 'mini-helper'

let value;
isDefined(value) // false

value = false
isDefined(value) // true

hexToAlphaNumeric('414243') // return 'ABC'
hexToAlphaNumeric('413943', true) // return 'A C'

```




## License
MIT © [Github: Avatar Solu&ccedil;&otilde;es](https://github.com/avatarsolucoes)
[Avatar Solu&ccedil;&otilde;es Digitais](https://avatarsolucoesdigitais.com.br)
