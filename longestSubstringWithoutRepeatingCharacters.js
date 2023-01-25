/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  let subString = ''
  let longestSubstring = ''
  for (let i = 0; i < s.length; i += 1) {
    if (subString.indexOf(s[i]) === -1) {
      subString += s[i]
    } else {
      subString = ''
    }
    if (subString.length > longestSubstring.length) {
      longestSubstring = subString
    }
  }
  return longestSubstring.length;
};

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))