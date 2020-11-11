// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Follow up:

//     Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
//     Could you do it in-place with O(1) extra space?
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // Solution using string conversion
  let sub1 = nums.slice(k);
  let sub2 = nums[k];
  // Solution 2
  // Runtime: 112 ms, faster than 45.12% of JavaScript online submissions for Rotate Array.
  // Memory Usage: 39.6 MB, less than 11.89% of JavaScript online submissions for Rotate Array.
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }

  return nums;

  // Solution using reverse
  // Runtime: 92 ms, faster than 65.15% of JavaScript online submissions for Rotate Array.
  // Memory Usage: 40.5 MB, less than 11.89% of JavaScript online submissions for Rotate Array.
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  k %= nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  return nums;

  // One-line
  return nums.slice(k).concat(nums.slice(0, k));
};
