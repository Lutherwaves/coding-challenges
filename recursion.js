/**
 * RECURSION
 * * A function that refers to itself
 * * Function Stack refers to the memory allocated for this function
 * * Stack overflow means the memory allocated for executing this process has been exceededs
 * * To avoid SO, every function needs to have a base case - a condition which stops the function from referring to itself
 * * Anything that can be done with recursion, can be done iteratively
 * * SUMMARY:
 * ** DRY
 * ** Readability
 * ** Large Stack and Memory Cost
 */

/**
 * WHEN TO USE RECURSION
 * * Every time you  are using a tree or converting something into a tree, consider recursion
 * * 1. Divided into a number of subproblems that are smaller instances of the same problem
 * * 2. Each instance of the subproblem is identical in nature
 * * 3. The solutions of each subproblem can be combined to solve the problem at hand
 * * Divide & Conquer using recursion
 */

/**
 * Challenge 1 - Factorial of
 * Write two function that finds the factorial of any number. One should use recursive, the other should just use a for loop
 * @param {*} number
 */
function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
} // O(n)

function findFactorialForLoop(number) {
  let answer = 1;
  for (let i = number; i > 1; i--) {
    answer = answer * i;
  }
  return answer;
} // O(n)

findFactorialForLoop(5) === findFactorialRecursive(5);

/**
 * Fibonacci Challenge
 * @param {*} n
 * Given a number N return the index value of the Fibonacci sequence, where the sequence is:
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
 * The pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 -> 2 + 3
 * fibonacciIterative(5) should return 5
 * fibonacciIterative(8) should return 21
 *
 */
function fibonacciIterative(n) {
  let fsequence = [0, 1];
  for (let i = 2; i <= n; i++) {
    fsequence.push(fsequence[i - 2] + fsequence[i - 1]);
  }
  return fsequence[n];
} // O(n-2)

tests = [
  fibonacciIterative(3) === 2,
  fibonacciIterative(5) === 5,
  fibonacciIterative(8) === 21,
  fibonacciIterative(1) === 1,
  fibonacciIterative(0) === 0,
  fibonacciIterative(2) === 1,
];
console.log(tests);

function fibonacciRecursive(n) {
  //code here;
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
} // O(2^n)

/**
 *
 * @param {index to start with} n
 * @param {current sum} sum
 * @param {previous number} prev
 */
function fibonacciRecursiveTailCall(n, sum = 0, prev = 1) {
  //code here;
  if (n <= 1) return sum;
  return fibonacciRecursiveTailCall(n - 1, prev + sum, sum);
}

// fibonacciRecursiveTailCall(650);

// fibonacciRecursiveTailCall(9, 1, 0)->
// fibonacciRecursiveTailCall(8, 1, 1)->
// fibonacciRecursiveTailCall(7, 2, 1)->
// fibonacciRecursiveTailCall(6, 3, 2)->
// fibonacciRecursiveTailCall(5, 5, 3)->
// fibonacciRecursiveTailCall(4, 8, 5)->
// fibonacciRecursiveTailCall(3, 13, 8)->
// fibonacciRecursiveTailCall(2, 21, 13)->
// fibonacciRecursiveTailCall(1, 34, 21)-> 34

tests = [
  fibonacciRecursive(0) === 0,
  fibonacciRecursive(1) === 1,
  fibonacciRecursive(2) === 1,
  fibonacciRecursive(3) === 2,
  fibonacciRecursive(4) === 3,
  fibonacciRecursive(5) === 5,
  fibonacciRecursive(8) === 21,
];
console.log(tests);
