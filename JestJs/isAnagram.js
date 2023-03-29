function isAnagram(str1, str2) {
    return formaStr(str1) === formaStr(str2);
  }
  
  function formaStr(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
  }
  
  module.exports = isAnagram;