// IMPORT MODULES under test here:
import { 
    addExclamationPoints, multiplyBySeven, multiplyBy12ThenHalve,
} from '../functions.js';

const { test, skip } = QUnit;

test('addExclamationPoints', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit');

    expect.equal(actual, expected);
});

test('addExclamationPoints2', (expect) => {
    const expected = 'Leroy Jenkins!!!';

    const actual = addExclamationPoints('Leroy Jenkins');

    expect.equal(actual, expected);
});



test('multiplyBySeven', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected);
});

test('this test should be not skipped2', (expect) => {
    const expected = 21;

    const actual = multiplyBySeven(3);

    expect.equal(actual, expected);
});

test('this test multiplyBy12ThenHalve', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected);
});
