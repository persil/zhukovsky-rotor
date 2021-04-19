const assert = require('assert');
const { calculateRotorDiameter } = require('./dist');

const result = calculateRotorDiameter(450*9.81, 50000, 1.112, 0.6);

assert.strictEqual(result.toPrecision(4), '7.398');
