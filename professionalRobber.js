let rob = (nums) => {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  let currentMax = 0;
  let prevMax = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentHouse = nums[i];
    let newMax = Math.max(currentMax, prevMax + currentHouse);
    prevMax = currentMax;
    currentMax = newMax;
  }

  return currentMax;
};
