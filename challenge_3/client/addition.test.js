/* eslint-env jest */
const add = require('./addition');

test('adds 1 to 2 and gets 3', () => {
  expect(add(1, 2)).toBe(3);
});
