# qcoin-address

This is a JS implementation of the Qoin address type, adapted from the GLIF Filecoin address package. It can create address instances, encode and decode addresses, and validate address checksums.

## Install

`npm i qcoin-address`

## Usage

```js
const { newFromString, encode, CoinType } = require('qcoin-address')

const address = newFromString('t1hvuzpfdycc6z6mjgbiyaiojikd6wk2vwy7muuei')
const addressProtocol = address.protocol()
const addressPayload = address.payload()
const addressString = address.toString()

const networkPrefix = CoinType.TEST
const encoded = encode(networkPrefix, address)
```

#### Exported methods

- newAddress
- newIDAddress
- newFromString
- decode
- encode
- equals
- bigintToArray
- getChecksum
- validateChecksum
- validateAddressString
- checkAddressString
- newPqcAddress

## Test

`npm install`<br/>
`npm test`

## License

This repository is dual-licensed under Apache 2.0 and MIT terms.
