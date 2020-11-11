// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  //check input
  if (nums < 2) {
    return false;
  }

  // Bruteforce
  // Runtime: 2504 ms, faster than 5.02% of JavaScript online submissions for Contains Duplicate.
  // Memory Usage: 45.5 MB, less than 6.99% of JavaScript online submissions for Contains Duplicate.
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;

  // Optimized solution
  // Runtime: 92 ms, faster than 50.45% of JavaScript online submissions for Contains Duplicate.
  // Memory Usage: 47.3 MB, less than 6.99% of JavaScript online submissions for Contains Duplicate.
  return nums.length !== new Set(nums).size;
};
