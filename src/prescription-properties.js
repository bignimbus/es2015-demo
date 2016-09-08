'use strict';

import { coerceNumberAndCallClosest, coerceString } from './util';

const coerceNumberToRange = (arr = [0, 1, 2]) => coerceNumberAndCallClosest.bind(null, arr);

const EYES = ['left', 'right'];

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

