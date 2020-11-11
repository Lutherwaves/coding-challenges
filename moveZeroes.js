// Input: [0, 1, 0, 3, 12];
// Output: [1, 3, 12, 0, 0];

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // Second solution
  // Runtime: 92 ms, faster than 25.85% of JavaScript online submissions for Move Zeroes.
  // Memory Usage: 40.1 MB, less than 23.92% of JavaScript online submissions for Move Zeroes.
  let zeroes = nums.filter((a) => a === 0).length;
  if (zeroes < 1) {
    return nums;
  }

  for (let i = 0; i <= zeroes; i++) {
    nums.splice(nums.indexOf(0), 1);
    nums.push(0);
  }

  // Third solution
  // Runtime: 84 ms, faster than 75.51% of JavaScript online submissions for Move Zeroes.
  // Memory Usage: 40.3 MB, less than 23.92% of JavaScript online submissions for Move Zeroes.
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
      len--;
    }
  }
  return nums;
};
