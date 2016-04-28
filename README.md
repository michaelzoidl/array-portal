# Array Portal
Make a portal between two arrays and transfer items between them

[![Build Status](https://travis-ci.org/michaelzoidl/array-portal.svg?branch=master)](https://travis-ci.org/michaelzoidl/array-portal)
[![devDependency Status](https://david-dm.org/michaelzoidl/array-portal/dev-status.svg)](https://david-dm.org/michaelzoidl/array-portal#info=devDependencies)
[![Dependency Status](https://david-dm.org/michaelzoidl/array-portal.svg)](https://david-dm.org/michaelzoidl/array-portal)

## Install
```
$ npm install array-portal --save
```

## Usage
```js
// List of things you want to sell
const offer = ['car', 'house', 'banana'];

// Array of stuff you've already sold
const sold = ['table'];

// Now you've sold the banana and want to move it from the offer-array to the sold-array
ArrayPortal({
  caller: 'banana'
  input: offer,
  output: sold
});

// The output you get is:
{
  input: ['car', 'house'],
  output: ['table', 'banana']
}
```

## One step further
```js
// Sometimes you've an array with a lot of objects - so you cannot identify an item by its name
const todos = [{ id: 1, text: 'Take out the trash'}, { id: 2, text: 'Wash the dishes' }];
const done = [];

// But thats no problem... let's say you've taken out the trash (so the id: 1 todo)
ArrayPortal({
  caller: {
    id: 1
  },
  input: todos,
  output: done
});

// The output you get is:
{
  input: [{ id: 2, text: 'Wash the dishes' }],
  output: [{ id: 1, text: 'Take out the trash' }]
}
```

## Benchmark
```
110,029 op/s
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
