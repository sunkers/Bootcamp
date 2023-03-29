const isAnagram = require('./isAnagram');

test('should return true when given two anagrams', () => {
  const str1 = 'a gentleman';
  const str2 = 'elegant man';
  const result = isAnagram(str1, str2);
  expect(result).toEqual(true);
});
