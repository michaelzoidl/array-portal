import { expect } from 'chai';
import ArrayPortal from './';

describe('ArrayPortal', () => {
  it('returns a object', () => {
    expect(ArrayPortal({output:'',input:'',caller:''})).to.be.a('object');
  });

  it('throws an error if no object is passed', () => {
    expect(() => {
      ArrayPortal();
    }).to.throw(Error);
  });

  it('throw an error if no input/output/caller is given', () => {
    expect(() => {
      ArrayPortal({
        not: '',
        that: '',
        what: '',
        we: '',
        expect: ''
      });
    }).to.throw(Error);
  });

  it('returns an object with input/output arrays', () => {
    expect(ArrayPortal({output:'',input:'',caller:''})).to.deep.equal({output:[],input:[]})
  });

  it('returns a object with teleported by caller with type string', () => {
    let teleported = ArrayPortal({
      caller: 'a',
      input: ['a','b','c'],
      output: ['d','e']
    });

    expect(teleported).to.deep.equal({
      input: ['b','c'],
      output: ['d','e','a']
    });
  });

  it('returns also a empty array if caller was the last item in array', () => {
    let teleported = ArrayPortal({
      caller: 'a',
      input: ['a'],
      output: []
    });

    expect(teleported).to.deep.equal({
      input: [],
      output: ['a']
    });
  });

  it('uses the lodash-findIndex method if you pass a object as caller', () => {
    let teleported = ArrayPortal({
      caller: {
        id: 'a'
      },
      input: [{
        id: 'a'
      }],
      output: []
    });

    expect(teleported).to.deep.equal({
      input: [],
      output: [{
        id: 'a'
      }]
    });
  })

  it('uses the lodash-findIndex method if you pass a object as caller', () => {
    let teleported = ArrayPortal({
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

    expect(teleported).to.deep.equal({
      input: [{
        id: 3,
        title: 'foobar'
      },{
        id: 39,
        title: 'nom nom nom'
      }],
      output: [{
        id: 1337,
        title: 'my door is open dude',
      },{
        id: 123,
        title: 'Portal it baby!'
      }]
    });
  });

  it('doesnt edit the original used arrays', () => {
    let inputArr = ['a','b','c'];
    let outputArr = ['d','e'];
    let caller = 'a';

    ArrayPortal({ caller: caller, input: inputArr, output: outputArr });

    expect(inputArr).to.deep.equal(['a','b','c']);
  });
});
