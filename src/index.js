'use strict';

import { prescriptionFactory } from './prescription-factory';

let rx = prescriptionFactory({
  left_sph: 1,
  right_sph: 2
});

console.log(rx.left_sph);
console.log(rx.right_sph);

try {
  rx.left_sph = 2;
} catch (e) {
  console.log('nope');
}

let newRx = rx.cloneAndMerge({
  left_sph: 2
});

console.log(rx.left_sph);
console.log(rx.right_sph);
console.log(newRx.left_sph);
console.log(newRx.right_sph);

let typedRx = prescriptionFactory({
  left_sph: '1',
  right_sph: '2'
});

console.log(typedRx.left_sph);
console.log(typedRx.right_sph);

let riskyRx = prescriptionFactory({
  left_sph: 'foo',
  right_dominance: {}
});

console.log(riskyRx.left_sph);
console.log(riskyRx.right_dominance);
