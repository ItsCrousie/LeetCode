/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let area = 0;
  let left = 0;
  let right = height.length-1
  while (left < right) {
    area = Math.max(area, Math.min(height[left], height[right]) * (right - left))
    height[left] <= height[right]
    ? left += 1
    : right -= 1
  }
  return area;
};

//accepted