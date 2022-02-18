# DL Validation

![npm](https://img.shields.io/npm/v/dl-validation)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/mlanders/dl-validation)
[![codecov](https://codecov.io/gh/mlanders/dl-validation/branch/main/graph/badge.svg?token=UOEH2OR1UC)](https://codecov.io/gh/mlanders/dl-validation)
![GitHub issues](https://img.shields.io/github/issues/mlanders/dl-validation)


[//]: # ([![Build Status][build-img]][build-url])

[//]: # ([![Downloads][downloads-img]][downloads-url])



[//]: # ([![Commitizen Friendly][commitizen-img]][commitizen-url])

[//]: # ([![Semantic Release][semantic-release-img]][semantic-release-url])

> This package is loosely based on the [Checkr](https://docs.checkr.com/#section/Reference/Driver-License-validation) drivers license validation regex.

## Usage

```javascript
const DLValidation = require('dl-validation')

DLValidation.validate("CA", "111112001")
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[ISC](https://choosealicense.com/licenses/isc/)


------

# my-package-name

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> My awesome module

## Install

```bash
npm install my-package-name
```

## Usage

```ts
import { myPackage } from 'my-package-name';

myPackage('hello');
//=> 'hello from my package'
```

## API

### myPackage(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### postfix

Type: `string`
Default: `rainbows`

Lorem ipsum.

[build-img]:https://github.com/ryansonshine/typescript-npm-package-template/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/ryansonshine/typescript-npm-package-template/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/typescript-npm-package-template
[downloads-url]:https://www.npmtrends.com/typescript-npm-package-template
[npm-img]:https://img.shields.io/npm/v/typescript-npm-package-template
[npm-url]:https://www.npmjs.com/package/typescript-npm-package-template
[issues-img]:https://img.shields.io/github/issues/ryansonshine/typescript-npm-package-template
[issues-url]:https://github.com/ryansonshine/typescript-npm-package-template/issues
[codecov-img]:https://codecov.io/gh/ryansonshine/typescript-npm-package-template/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/ryansonshine/typescript-npm-package-template
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
