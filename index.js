// External
import findIndex from 'lodash.findindex';

// Helper
const av = (prop) => prop !== undefined && prop !== null ? true : false;
const isObj = (prop) => Object.prototype.toString.call(prop) === '[object Object]' ? true : false;

export default (payload) => {
  // Expect a object
  if(!isObj(payload)) throw new Error('Array-Portal expects an object as payload');

  const { input, output, caller } = payload;

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
    outputRes.push(inputRes[callerFoundIndex]);
    inputRes.splice(callerFoundIndex, 1);
  }

  return {
    input: inputRes,
    output: outputRes
  };
}
