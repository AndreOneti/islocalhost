# Is Localhost


### Installation

`npm i isLocalhost`
or
`yarn add isLocalhost`


### Use

```javascript
const { isLocalhost } = require('isLocalhost');

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
