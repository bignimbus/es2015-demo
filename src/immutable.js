'use strict';

// exports a constructor that freezes all properties of the
// object argument
export class Immutable {
  constructor(obj = {}) {
    Object.assign(this, obj);
    Object.freeze(this);
    return this;
  }

  // returns a new instance with identical properties, extended
  // by an object argument
  cloneAndMerge(obj = {}) {
    return new this.constructor(Object.assign({}, this, obj));
  }
}

