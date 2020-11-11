/**
 *
 * @param {number[]} nums
 * @param {number} target
 *
 * @return {number[]} - return indices of the two numbers such that they add up to target
 *
 * Input: [2,7,11,15], target = 9
 * Output: [0,1] Because nums[0] + nums[1] === 9, we return [0, 1]
 */

var twoSum = (nums, target) => {
  // Check input
  if (nums.length < 1 || typeof target !== 'number') {
    console.log('Input error');
    return;
  }

  // BRUTE FORCE SOLUTION
  // Runtime: 8052 ms, faster than 5.02% of JavaScript online submissions for Two Sum.
  // Memory Usage: 47.1 MB, less than 5.40% of JavaScript online submissions for Two Sum.
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  // Slightly optimized
  // Runtime: 6076 ms, faster than 5.02 % of JavaScript online submissions for Two Sum.
  // Memory Usage: 47.2 MB, less than 5.40 % of JavaScript online submissions for Two Sum.
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  // Using object
  // Runtime: 120 ms, faster than 47.12% of JavaScript online submissions for Two Sum.
  // Memory Usage: 48.1 MB, less than 5.40% of JavaScript online submissions for Two Sum.
  let mapDiff = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in mapDiff) {
      return [mapDiff[diff], i];
    } else {
      mapDiff[nums[i]] = i;
    }
  }

  // Using MAP
  // Runtime: 92 ms, faster than 55.05% of JavaScript online submissions for Two Sum.
  // Memory Usage: 47.9 MB, less than 5.40% of JavaScript online submissions for Two Sum.
  let mapDiff = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (mapDiff.has(diff)) {
      return [mapDiff.get(diff), i];
    } else {
      mapDiff.set(nums[i], i);
    }
  }
};
