/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i+=1) {
    let difference = target - nums[i];
    let differenceIdx = nums.indexOf(difference)
    if (differenceIdx !== -1 && differenceIdx !== i) {
      return [i, differenceIdx]
    }
  }
  return 'No combination of numbers matches :('
};

//accepted