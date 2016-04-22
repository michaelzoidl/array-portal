# Array Portal
Make a portal between two arrays and transfer items between them

[![Build Status](https://travis-ci.org/michaelzoidl/array-portal.svg?branch=master)](https://travis-ci.org/michaelzoidl/array-portal)
[![devDependency Status](https://david-dm.org/michaelzoidl/array-portal/dev-status.svg)](https://david-dm.org/michaelzoidl/babel-root-import#info=devDependencies)


## Install
```
$ npm install array-portal --save
```

## Usage
```js
// Import with ES6
import ArrayPortal from 'array-portal';

// Import with ES5
var SwapArray = require('array-portal').default;

ArrayPortal({
  caller: 'a'
  input: ['a','b','c'],
  output: ['d','e']
})

// Returns:
// {
//   input: ['b','c'],
//   output: ['a','d','e']
// }
```

## Complex callers
If you pass an object to the caller the ArrayPortal uses the lodash findIndex method to handle the search-stuff. So you can pass whatever you want in the object, the findIndex module manage this.
:warning: You can just pass objects through the caller, the findIndex method from lodash accepts more types - this module ignores everything except objects.
Fore more information checkout the [findIndex Documentation on the loadash.com](https://lodash.com/docs#findIndex)

```javascript
ArrayPortal({
  caller: {
    id: 123
  },
  input: [{
    id: 3,
    title: 'foobar'
  },{
    id: 39,
    title: 'nom nom nom'
  },{
    id: 123,
    title: 'Portal it baby!'
  }],
  output: [{
    id: 1337,
    title: 'my door is open dude'
  }]
});

// returns:
//   input: [{
//     id: 3,
//     title: 'foobar'
//   },{
//     id: 39,
//     title: 'nom nom nom'
//   }],
//   output: [{
//     id: 1337,
//     title: 'my door is open dude',
//   },{
//     id: 123,
//     title: 'Portal it baby!'
//   }]
```

## Benchmark
```
100,029 op/s
```

## Contribute
```
// Run and Watch tests
$ npm run test -- -w

// Just run tests
$ npm run test

// Create new build
$ npm run build

// Run benchmark
$ npm run bench
```
