'use strict';

import { PROPS } from './prescription-properties';
import { Immutable } from './immutable';

// returns default object definition along with the
// transformed value
const normalizedRxProperty = (transform, val) => {
  return {
    enumerable: true,
    writable: false,
    value: val !== void 0 ? transform(val) : null
  };
};

// plucks values in obj that correspond to keys in
// the PROPS map keys and calls normaliedRxProperty
// to get an object declaring the value and metadata
// of the object property matching the map key.
const defineRxProperties = (entries, obj) => {
  return entries.reduce((definedProps, prop) => {
    let [key, transform] = [...prop];
    Object.defineProperty(definedProps, key, normalizedRxProperty(transform, obj[key]));
    return definedProps;
  }, {});
}

const newFrozenRx = rx => new Immutable(rx);

export const defineRxPropertiesWithMap = obj => defineRxProperties([...PROPS.entries()], obj);

// returns a new object consisting only of properties found
// in the PROPS map keys. Each value is run through a
// transform function specified in the corresponding
// PROPS map value
export const prescriptionFactory = (obj = {}) => {
  let whitelistedProps = defineRxPropertiesWithMap(obj);
  return newFrozenRx(whitelistedProps);
};
