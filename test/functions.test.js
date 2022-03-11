// IMPORT MODULES under test here:
import { 
    addExclamationPoints, multiplyBySeven, multiplyBy12ThenHalve, returnAsAnArray,
    returnAsAString, makeLuckyGreeting, getSecondItem, getLastItem, getRandomNumber, divideThenMultiply,
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

test('this adds exclamation points', (expect) => {
    const expected = 'Exclaim!!!';

    const actual = addExclamationPoints('Exclaim');

    expect.equal(actual, expected);
});



test('multiplyBySeven', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected);
});

test('multiplyBySeven2', (expect) => {
    const expected = 21;

    const actual = multiplyBySeven(3);

    expect.equal(actual, expected);
});

test('this multiplies by 7', (expect) => {
    const expected = 63;

    const actual = multiplyBySeven(9);

    expect.equal(actual, expected);
});

test('this test multiplyBy12ThenHalve', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected);
});

test('this test multiplyBy12ThenHalve2', (expect) => {
    const expected = 42;

    const actual = multiplyBy12ThenHalve(7);

    expect.equal(actual, expected);
});

test('this mlutiplies by 12 then divides in half', (expect) => {
    const expected = 66;

    const actual = multiplyBy12ThenHalve(11);

    expect.equal(actual, expected);
});

test('this mlutiplies by 12 then divides in half', (expect) => {
    const expected = 66;

    const actual = multiplyBy12ThenHalve(11);

    expect.equal(actual, expected);
});

test('this function divides then multiplies', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected);
});

test('this function divides then multiplies2', (expect) => {
    const expected = 25;

    const actual = divideThenMultiply(20, 4, 5);

    expect.equal(actual, expected);
});

test('this function divides then multiplies3', (expect) => {
    const expected = 20;

    const actual = divideThenMultiply(40, 4, 2);

    expect.equal(actual, expected);
});



test('this test returnAsAnArray', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual, expected);
});

test('this test returnAsAnArray2', (expect) => {
    const expected = [4, 2, 0];

    const actual = returnAsAnArray(4, 2, 0);

    expect.deepEqual(actual, expected);
});

test('This returns three inputs as an array', (expect) => {
    const expected = ['dream', 'team', 'time'];

    const actual = returnAsAnArray('dream', 'team', 'time');

    expect.deepEqual(actual, expected);
});

test('this test returnAsAString', (expect) => {
    const expected = '845';

    const actual = returnAsAString(8, 4, 5);

    expect.equal(actual, expected);
});

test('this test returnAsAString2', (expect) => {
    const expected = '420';

    const actual = returnAsAString(4, 2, 0);

    expect.equal(actual, expected);
});

test('this returns three numbers as a string', (expect) => {
    const expected = '777';

    const actual = returnAsAString(7, 7, 7);

    expect.equal(actual, expected);
});

test('this test makeLuckyGreeting', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.';

    const actual = makeLuckyGreeting(8, 4);

    expect.equal(actual, expected);
});

test('this test makeLuckyGreeting2', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 13.';

    const actual = makeLuckyGreeting(12, 1);

    expect.equal(actual, expected);
});

test('this test this tells you your lucky number', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 3.';

    const actual = makeLuckyGreeting(1, 2);

    expect.equal(actual, expected);
});

test('this test getSecondItem', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual, expected);
});

test('this test getSecondItem2', (expect) => {
    const expected = 'frisby';

    const actual = getSecondItem(['basketball', 'frisby', 'traffic cone', 'boof']);

    expect.equal(actual, expected);
});

test('this returns second item in an array', (expect) => {
    const expected = 'blue';

    const actual = getSecondItem(['orange', 'blue', 'white', 'magenta']);

    expect.equal(actual, expected);
});

test('this test getLastItem', (expect) => {
    const expected = 'plum';

    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual, expected);
});

test('this test getLastItem2', (expect) => {
    const expected = 'boof';

    const actual = getLastItem(['basketball', 'frisby', 'traffic cone', 'boof']);

    expect.equal(actual, expected);
});

test('this returns the last item in an array', (expect) => {
    const expected = 'magenta';

    const actual = getLastItem(['orange', 'blue', 'white', 'magenta']);

    expect.equal(actual, expected);
});

test('this delivers a random number', (expect) => {

    const answer = getRandomNumber();

    expect.equal(typeof answer, 'number');
});

test('this delivers a random number2', (expect) => {

    const answer = getRandomNumber();

    expect.equal(typeof answer, 'number');
});

test('this delivers a random number3', (expect) => {

    const answer = getRandomNumber();

    expect.equal(typeof answer, 'number');
});



