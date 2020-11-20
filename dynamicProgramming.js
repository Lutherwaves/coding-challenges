let calculations1 = 0;
let calculations2 = 0;
let cache = {};

function fib(n) {
  calculations1++;
  if (n < 2) {
    return n;
  } else if (!cache[n]) {
    cache[n] = fib(n - 1) + fib(n - 2);
  }

  return cache[n];
}

const test_n = 55;

console.log(
  'Fibonacci number at index',
  test_n,
  ':',
  fib(test_n),
  ' with #',
  calculations1,
  'calculations'
);

function fibonacciRecursive(n) {
  calculations2++;
  //code here;
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
} // O(2^n)

console.log(
  'Fibonacci number (no memo) at index',
  test_n,
  ':',
  fibonacciRecursive(test_n),
  ' with #',
  calculations2,
  'calculations'
);

console.log(
  'Memoization saved us',
  Math.floor(100 - (calculations1 / calculations2) * 100),
  '% or ',
  Math.floor(calculations2 - calculations1),
  'calculations!'
);
