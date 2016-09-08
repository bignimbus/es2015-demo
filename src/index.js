'use strict';

import { prescriptionFactory } from './prescription-factory';
import { Prescription } from './prescription-class';

const getPrescription = obj => prescriptionFactory(obj);

console.log('***factory');
let rx = getPrescription({
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

console.log('ok!');
let newRx = rx.cloneAndMerge({
  left_sph: 2
});

console.log(rx.left_sph);
console.log(rx.right_sph);
console.log(newRx.left_sph);
console.log(newRx.right_sph);

let typedRx = getPrescription({
  left_sph: '1',
  right_sph: '2'
});

console.log(typedRx.left_sph);
console.log(typedRx.right_sph);

let riskyRx = getPrescription({
  left_sph: 'foo',
  right_dominance: {}
});

console.log(riskyRx.left_sph);
console.log(riskyRx.right_dominance);

