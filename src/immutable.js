'use strict';

export class Immutable {
  constructor(obj) {
    Object.assign(this, obj);
    Object.freeze(this);
    return this;
  }

  cloneAndMerge(obj = {}) {
    return new this.constructor(Object.assign({}, this, obj));
  }
}

