var ArrayPortal = require('./dist/array-portal').default;
var TestArr = ['a','b','c'];

suite('Swap arrays', function() {
  bench('ArrayPortal-Package', function() {
    ArrayPortal({
      caller: {
        id: 'a'
      },
      input: [{
        id: 'a'
      }],
      output: []
    })
  });
});
