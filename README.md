# validation-helper

[![NPM](https://nodei.co/npm/@mediaxpost/validation-helper.png?downloads=true)](https://nodei.co/npm/@mediaxpost/validation-helper/)

[![Actual version published on npm](http://img.shields.io/npm/v/@mediaxpost/validation-helper.svg)](https://www.npmjs.org/package/@mediaxpost/validation-helper)
[![Travis build status](https://travis-ci.org/MediaXPost/validation-helper.svg)](https://www.npmjs.org/package/@mediaxpost/validation-helper)
[![Total npm module downloads](http://img.shields.io/npm/dt/@mediaxpost/validation-helper.svg)](https://www.npmjs.org/package/@mediaxpost/validation-helper)
[![Package Quality](http://npm.packagequality.com/badge/@mediaxpost/validation-helper.png)](http://packagequality.com/#?package=@mediaxpost/validation-helper)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a6899212e1c746f09de8088a59ae6cfc)](https://www.codacy.com/app/chronosis/validation-helper?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=MediaXPost/validation-helper&amp;utm_campaign=Badge_Grade)
[![Codacy Coverage Badge](https://api.codacy.com/project/badge/Coverage/a6899212e1c746f09de8088a59ae6cfc)](https://www.codacy.com/app/chronosis/validation-helper?utm_source=github.com&utm_medium=referral&utm_content=MediaXPost/validation-helper&utm_campaign=Badge_Coverage)
[![Dependencies badge](https://david-dm.org/MediaXPost/validation-helper/status.svg)](https://david-dm.org/MediaXPost/validation-helper?view=list)


`validation-helper` is a set of simple data validation and conversion tools for string input data that uses [Validator.js](https://www.npmjs.com/package/validator)

# [Installation](#installation)
<a name="installation"></a>

```shell
npm install @mediaxpost/validation-helper
```

# [Usage](#usage)
<a name="usage"></a>

```js
const validationHelper = require('@mediaxpost/validation-helper');

console.log(validationHelper.validate('1.23', 'float'));
console.log(validationHelper.validate('qwerty', 'float'));
console.log(validationHelper.validate('qwerty', 'string'));
console.log(validationHelper.convert('1.23', 'float'));
console.log(validationHelper.strToBool('yes'));
console.log(validationHelper.strToBool('True'));
```

# [API Reference](#api)
<a name="api"></a>

## validationHelper.validate(value, type [, options]) &#x27fe; boolean
Test is the string `value` is of the `type` specified. Additional [Validator.js](https://www.npmjs.com/package/validator) `options` may be passed for added constraints.

| Type | Desc | Options |
| ---- | ---- | ------- |
| `'int'`, `'integer'` |  Integer Values | Y |
| `'float'` | Floating Point Values | Y |
| `'bool'`, `'boolean'` | Boolean values | N |
| `'email'`, | Email addresses | Y |
| `'currency'` | Currency values (*e.g. '1.23', '$30', '€12,73'*) | Y |
| `'uuid'` | v1, v2, or v4 UUID values | N |
| `'url'` | Url values (*e.g. 'http://google.com'* ) | Y |
| `'fqdn'` | Fully-qualified Domain Name (*e.g. 'docs.google.com'*) | Y |
| `'apikey'` | A [`uuid-apikey`](https://www.npmjs.com/package/uuid-apikey) APIKey value  (e.g. 'ZYXWVTS-9876543-ABCDEFG-1234567') | N |
| `'string'` | String Values | N |
| `'any'` | Any possible value | N |

```js
validationHelper.validate('1.23', 'float');
```

**Output**:
```
true
```

## validationHelper.convert(value, type) &#x27fe; mixed
Attempts to convert the provided string `value` to the `type` specified. If the `type` is unknown, then the original `value` is returned.  The `type` can be `int`, `float`, or `bool`. For `int` and `float` values `NaN` is returned if the value can not be converted.

```js
validationHelper.convert('1234', 'int');
```

**Output**:
```
1234
```

## validationHelper.strToBool(str) &#x27fe; boolean
Converts the string value to a boolean. `true`, `yes`, `1` return a value `true`. All other value return `false`.

# [License](#license)
<a name="license"></a>

Copyright (c) 2018 Jay Reardon -- Licensed under the MIT license.
