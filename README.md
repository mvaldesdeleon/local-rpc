# local-rpc

Proxy-based local-rpc (aka runtime dependency injection)

```JS
// Consumer API
const { componentA, componentB } = require('local-rpc');

componentA.firstOperation(1, 2, 3);
componentB.subComponentX.finalOperation(4, 5, 6);

// Profit
```

```JS
// Provider API
require('local-rpc')((...args) => console.log(...args));

// Profit
```


# install
with [npm](https://npmjs.org) do:

```
npm install local-rpc
```

# license

MIT
