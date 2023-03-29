const reverseString = require('./reverseString');

test('Should reverse Hello World', () => {
  const str = 'Hello World';
  const result = reverseString(str);
  expect(result).toEqual('dlrow olleh');
});
