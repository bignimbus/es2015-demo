'use strict';

import { Immutable } from './immutable';
import { defineRxPropertiesWithMap } from './prescription-factory';

export class Prescription extends Immutable {
  constructor(obj) {
    let whitelistedProps = defineRxPropertiesWithMap(obj);
    super(whitelistedProps);
  }
}
