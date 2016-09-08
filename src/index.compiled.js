'use strict';

var _prescription = require('./prescription');

var _prescription2 = _interopRequireDefault(_prescription);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rx = new _prescription2.default({
  left_sph: 1,
  right_sph: 1
});

console.log(rx.left_sph);
rx.left_sph = 2;
