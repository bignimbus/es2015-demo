'use strict';

import { closest } from './util';

const EYES = ['left', 'right'];

const coerceNumberAndCallClosest = (arr, num) => {
  num = parseFloat(num, 10);
  if (Number.isNaN(num)) return null;
  return closest(arr, num);
};

const coerceNumberToRange = (arr = [0, 1, 2]) => coerceNumberAndCallClosest.bind(null, arr);

const coerceString = () => str => str.toString();

const RX_PROPS_MAP = new Map([
  ['sph', coerceNumberToRange()],
  ['cyl', coerceNumberToRange()],
  ['axis', coerceNumberToRange()],
  ['bc', coerceNumberToRange()],
  ['diam', coerceNumberToRange()],
  ['dominance', coerceString()],
  ['add', coerceNumberToRange()]
]);

export const PROPS = new Map();

for (let pair of RX_PROPS_MAP.entries()) {
  let [key, val] = [...pair];
  EYES.forEach(eye => {
    PROPS.set(`${eye}_${key}`, val)
  });
}

