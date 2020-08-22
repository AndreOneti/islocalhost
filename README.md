# Is Localhost


### Installation

`npm i @andreoneti/islocalhost`
or
`yarn add @andreoneti/islocalhost`


### Use

```javascript
const { isLocalhost } = require('@andreoneti/islocalhost');

isLocalhost("localhost");             // true
isLocalhost("127.0.0.1");             // true
isLocalhost("google.com");            // false
```

OR

```javascript
import { isLocalhost } from 'isLocalhost';

isLocalhost("localhost");             // true
isLocalhost("127.0.0.1");             // true
isLocalhost("google.com");            // false
```
