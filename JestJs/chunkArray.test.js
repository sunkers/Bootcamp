const chunkArray = require('./chunkArray');

test('Should chunk the array in multiples array of max length = 2', () => {
  const arr = [1, 2, 3, 4, 5];
  const len = 2;
  const result = chunkArray(arr, len);
  expect(result).toEqual([[1, 2], [3, 4], [5]]);
});

test('Should return an empty array if input is an empty array', () => {
    const arr = [];
    const len = 2;
    const result = chunkArray(arr, len);
    expect(result).toEqual([]);
  });