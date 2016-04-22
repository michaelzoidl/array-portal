// External
import findIndex from 'lodash.findindex';
import clone from 'lodash.clone';

// Helper
const av = (prop) => prop !== undefined && prop !== null ? true : false;
const isObj = (prop) => Object.prototype.toString.call(prop) === '[object Object]' ? true : false;

export default (payload) => {
  // Expect a object
  if(!isObj(payload)) throw new Error('Array-Portal expects an object as payload');

  const { input: i, output: o, caller } = payload;
  const input = clone(i);
  const output = clone(o);

  if(!av(input) || !av(output) || !av(caller)) {
    throw new Error('Array-Portal expects an object with an input and output array and an caller');
  }

  let inputRes = input || [];
  let outputRes = output || [];
  let callerFoundIndex = -1;

  if(isObj(caller)) {
    callerFoundIndex = findIndex(input, caller);
  } else {
    callerFoundIndex = Array.isArray(input) ? input.indexOf(caller) : -1;
  }

  if(callerFoundIndex > -1) {
    outputRes = outputRes.concat([inputRes[callerFoundIndex]]);
    inputRes.splice(callerFoundIndex, 1);
  }

  return {
    input: inputRes,
    output: outputRes
  };
}
