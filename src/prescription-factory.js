'use strict';

import { PROPS } from './prescription-properties';
import { Immutable } from './immutable';

const normalizedRxProperty = (transform, val) => {
  return {
    enumerable: true,
    writable: false,
    value: val !== void 0 ? transform(val) : null
  };
};

const defineRxProperties = (entries, obj) => {
  var foo = entries.reduce((definedProps, prop) => {
    let [key, transform] = [...prop];
    Object.defineProperty(definedProps, key, normalizedRxProperty(transform, obj[key]));
    return definedProps;
  }, {});
  return foo;
}

const newFrozenRx = rx => new Immutable(rx);

export const prescriptionFactory = (obj = {}) => {
  let entries = [...PROPS.entries()],
    whitelistedProps = defineRxProperties(entries, obj);
  return newFrozenRx(whitelistedProps);
};
