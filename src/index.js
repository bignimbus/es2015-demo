'use strict';

import './xcon';
import { prescriptionFactory } from './prescription-factory';
import { Prescription } from './prescription-class';

['factory', 'class'].forEach(fn => {
  console.log('ᕦ( ~ ◔ ᴥ ◔ ~ )੭━☆ﾟ.*･｡ﾟ'+ `METHOD: ${fn}`);
  let getPrescription = obj => {
    return fn === 'factory' ? prescriptionFactory(obj) : new Prescription(obj);
  };

  let rx = getPrescription({
    left_sph: 1,
    right_sph: 2
  });

  console.expect(rx.left_sph).toEqual(1);
  console.expect(rx.right_sph).toEqual(2);

  try {
    rx.left_sph = 2;
  } catch (e) {
    console.expect(e).toBeDefined();
    console.expect(rx.left_sph).toEqual(1);
  }

  let newRx = rx.cloneAndMerge({
    left_sph: 2
  });

  console.expect(rx.left_sph).not.toEqual(newRx.left_sph);
  console.expect(rx.right_sph).toEqual(newRx.right_sph);

  let typedRx = getPrescription({
    left_sph: '1',
    right_sph: '2'
  });

  console.expect(typedRx.left_sph).toEqual(1);
  console.expect(typedRx.right_sph).toEqual(2);

  let riskyRx = getPrescription({
    left_sph: 'foo',
    right_dominance: {}
  });

  console.expect(riskyRx.left_sph).toEqual(null);
  console.expect(riskyRx.right_dominance).toEqual('[object Object]');
});

