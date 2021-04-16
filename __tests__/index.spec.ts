import { calculateRotorDiameter, calculateRotorPower, calculateRotorThrust } from '../src';

test('calculateRotorDiameter', () => {
    expect(calculateRotorDiameter(450*9.81, 50000, 1.112, 0.6)).toBeCloseTo(7.397, 2);
});

test('calculateRotorPower', () => {
    expect(calculateRotorPower(600*9.81, 8.75, 1.112, 0.7)).toBeCloseTo(55784.296, 2);
});

test('calculateRotorThrust', () => {
    expect(calculateRotorThrust(7.397, 50000, 1.112, 0.6)).toBeCloseTo(4414.275, 2);
});
