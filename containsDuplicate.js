/**
 * Given an array of integers, find if the array contains any duplicates.
 * Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
 * Example 1:
 * Input: [1,2,3,1]
 * Output: true
 */

// First Solution
// Runtime: 2504 ms, faster than 5.02% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 45.5 MB, less than 6.99% of JavaScript online submissions for Contains Duplicate.
var containsDuplicate = function (nums) {
  // Base case
  if (nums < 2) {
    return false;
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

// Second solution
// Runtime: 92 ms, faster than 50.45% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 47.3 MB, less than 6.99% of JavaScript online submissions for Contains Duplicate.
var containsDuplicate = function (nums) {
  return nums.length !== new Set(nums).size;
};
