/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxLIdx = 0
  let maxL = height[maxLIdx];
  let maxRIdx = height.length-1
  let maxR = height[maxRIdx];
  let maxArea = 0

  const calcContainer = (l, lIdx, r, rIdx) => {
    return Math.min(l, r) * (rIdx - lIdx)
  }

  for (let i = 0; i < height.length; i += 1) {
    for (let j = height.length-1; j > i; j -= 1) {
      const l = height[i];
      const r = height[j];
      const currentArea = calcContainer(l, i, r, j)
      if (currentArea > maxArea && l > maxL) {
        maxL = l
        maxLIdx = i
      }
      if (currentArea > maxArea && r > maxR) {
        maxR = r
        maxRIdx = j
      }
      maxArea = calcContainer(maxL, maxLIdx, maxR, maxRIdx)
    }
  }
  return maxArea
};

//times out 55/61 cases