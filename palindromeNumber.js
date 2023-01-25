/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  x += '';
  xReverse = x.split('').reverse().join('');
  return x === xReverse
    ? true
    : false
};

//accepted
