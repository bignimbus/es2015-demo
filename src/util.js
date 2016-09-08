'use strict';

// here are some more functional uses of ES2015.

// yo dawg, I heard you like functions.
// Compose is a function that combines other functions so
// you can make more funcitons out of your functions.
// Array.prototype.reduce and reduceRight are both intended
// to "reduce" an array to one value.  In this case, we are
// "reducing" an array of functions into one function.
const compose = (...fns) => initial => fns.reduceRight((val, fn) => fn(val), initial);

// rewritten from https://github.com/Opternative/opternative/blob/dev/app/assets/javascripts/common.js#L136-L148
const closest = (arr, num) => {
  let [head, ...tail] = arr;
  if (arr.length < 2) return head;
  let closestTail = closest(tail, num);
  return Math.abs(num - head) < Math.abs(num - closestTail) ?
    head :
    closestTail
};

const ensureNumber = num => {
  num = parseFloat(num, 10);
  return Number.isNaN(num) ? null : num;
};

const callClosestIfNotNull = (arr, num) => {
  return num === null ? null : closest(arr, num);
};

// we are using compose here.
const coerceAndCallClosest = (arr, num) => compose(
    ensureNumber,
    callClosestIfNotNull.bind(null, arr)
  )(num);

// and finally, we create a function
// that invokes the composed function with everything it needs
export const coerceNumberAndCallClosest = (arr, num) => coerceAndCallClosest(arr, num);

// basically just a wrapper for `.toString()` right now
export const coerceString = () => str => str.toString();
