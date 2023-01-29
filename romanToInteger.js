/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const conversion = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  return s.split('').reduce((acc, curr) => conversion[curr] + acc, 0)
};