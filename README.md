# DL Validation

![npm](https://img.shields.io/npm/v/dl-validation)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/mlanders/dl-validation)
[![codecov](https://codecov.io/gh/mlanders/dl-validation/branch/main/graph/badge.svg?token=UOEH2OR1UC)](https://codecov.io/gh/mlanders/dl-validation)
![GitHub issues](https://img.shields.io/github/issues/mlanders/dl-validation)
![npm](https://img.shields.io/npm/dy/dl-validation)

> This package is loosely based on the [Checkr](https://docs.checkr.com/#section/Reference/Driver-License-validation) driver license validation regex.
## Install

```bash
npm install dl-validation
```

```bash
yarn add dl-validation
```

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