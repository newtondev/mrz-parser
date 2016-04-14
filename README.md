# mrz-parser

[![travis build](https://img.shields.io/travis/newtondev/mrz-parser.svg?style=flat-square)](https://travis-ci.org/newtondev/mrz-parser)
[![codecov coverage](https://img.shields.io/codecov/c/github/newtondev/mrz-parser.svg?style=flat-square)](https://codecov.io/github/newtondev/mrz-parser)
[![version](https://img.shields.io/npm/v/newtondev-mrz-parser.svg?style=flat-square)](http://npm.im/newtondev-mrz-parser)
[![downloads](https://img.shields.io/npm/dm/newtondev-mrz-parser.svg?style=flat-square)](http://npm-stat.com/charts.html?package=newtondev-mrz-parser)
[![MIT License](https://img.shields.io/npm/l/newtondev-mrz-parser.svg?style=flat-square)](https://opensource.org/licenses/MIT)

Parses the MRZ found of Passport and Travel Documents and returns the data in a human readable form.

Example:

```javascript
var lib = require('./dist/index.js');
var data = lib.parse('P<CANMARTIN<<SARAH<<<<<<<<<<<<<<<<<<<<<<<<<<ZE000509<9CAN8501019F2301147<<<<<<<<<<<<<<08');
```

The Result is a javascript object with the decoded information:

```javascript
{
  documentCode: 'P',
  documentType: 'PASSPORT',
  documentTypeCode: null,
  issuer: 'CAN',
  names: {
    lastName: 'MARTIN',
    names: [
      'SARAH'
    ]
  },
  documentNumber: 'ZE000509',
  nationality: {
    abbr: 'CAN',
    full: 'Canada'
  },
  dob: {
    year: '1985',
    month: '01',
    day: '01',
    original: '850101'
  },
  sex: {
    abbr: 'F',
    full: 'Female'
  },
  checkDigit: {
    documentNumber: {
      value: '9',
      valid: true
    },
    dob: {
      value: '9',
      valid: true
    },
    expiry: {
      value: '7',
      valid: true
    },
    personalNumber: {
      value: '0',
      valid: true
    },
    finalCheck: {
      value: '8',
      valid: true
    },
    valid: true
  },
  expiry: {
    year: '2023',
    month: '01',
    day: '14',
    original: '230114'
  },
  personalNumber: ''
}
```
