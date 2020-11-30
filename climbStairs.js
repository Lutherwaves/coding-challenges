// staircase
// n steps to reach the top
// each time either 1 or 2 steps
// how many distinct ways to climb the top
// n = 2
// 1. way  1 step + 1 step
// 2. way is 2 steps
// ==> 2 ways
// 1<= n <= 45
// Variant 1
var climbStairs = (n) => {
  let fseq = [0, 1, 1];

  for (let i = 3; i <= n + 1; i++) {
    fseq.push(fseq[i - 2] + fseq[i - 1]);
  }
  return fseq[n + 1];
};

// Variant 2
let cache = {};
var climbStairs = (n) => {
  // Base case
  if (n < 3) {
    return n;
  }
  if (!cache[n]) {
    cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
  }
  return cache[n];
};

climbStairs(5);
