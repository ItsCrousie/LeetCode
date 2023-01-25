/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  x += '';
  xReverse = x.split('').reverse().join('');
  if (x === xReverse) {
      return true;
  } else {
      return false;
  }
};

//accepted