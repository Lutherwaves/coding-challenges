// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = (nums) => {
  // First Solution
  // Runtime: 220 ms, faster than 5.33% of JavaScript online submissions for Maximum Subarray.
  // Memory Usage: 39.2 MB, less than 11.63% of JavaScript online submissions for Maximum Subarray.
  let maxSum = -Infinity; // if we take no elements, zero will be returned

  for (let i = 0; i < nums.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < nums.length; j++) {
      sumFixedStart += nums[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }
  // Second Solution
  // Runtime: 84 ms, faster than 69.74% of JavaScript online submissions for Maximum Subarray.
  // Memory Usage: 39.1 MB, less than 11.63% of JavaScript online submissions for Maximum Subarray.
  let maxSum = -Infinity;
  let partialSum = 0;

  for (let i = 0; i < nums.length; i++) {
    partialSum += nums[i];
    maxSum = Math.max(maxSum, partialSum);

    if (partialSum < 0) partialSum = 0;
  }

  // Third solution
  // Runtime: 84 ms, faster than 69.74% of JavaScript online submissions for Maximum Subarray.
  // Memory Usage: 40.7 MB, less than 11.63% of JavaScript online submissions for Maximum Subarray.
  let maxSum = -Infinity;
  let partialSum = 0;
  for (let n of nums) {
    partialSum = Math.max(n, partialSum + n);
    maxSum = Math.max(maxSum, partialSum);
  }
  return maxSum;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6;
