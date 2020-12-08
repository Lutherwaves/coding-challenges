/**
 * Which sort is the best?
 * * INSERTION SORT - used with only a few items (small input) and mostly sorted data - very little space + easy to implement
 * * BUBBLE SORT - never use bubble sort (teaching)
 * * SELECTION SORT - never use selection sort (teaching)
 * * MERGE SORT - really good because of DAC; worried for worst-case scenarios; space complexity is high
 * * QUICKSORT - low memory complexity; bad for worst-case scenarios (if pivot is picked badly)
 * * RADIX OR COUNTING SORT - used when values are in a certain value range (currencies, coefficients, etc)
 */

/**
 * INTEVIEW QUESTIONS
 */

//#1 - Sort 10 schools around your house by distance:
// - INSERTION SORT
// - really fast on small sets
// - easy to code
// - it has Space Complexity of O(1)

//#2 - eBay sorts listings by the current Bid amount:
// - RADIX or COUNTING SORT
// - a bid is usually a number in a certain range

//#3 - Sport scores on ESPN:
// - QUICK SORT
// - althought worst case could come
// - worried about in-memory sorting in comparison to Merge Sort

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data:
// - MERGESORT
// - not worried about memory
// - big data, so I am worried about worst case

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews:
// - INSERTION SORT
// - almost sorted array

//#6 - Temperature Records for the past 50 years in Canada:
// IF TEMPERATURES DONT HAVE DECIMAL PLACES - RADIX OR COUNTING SORT
// IF DECIMAL PLACES - QUICKSORT because of in-memory sorting

//#7 - Large user name database needs to be sorted. Data is very random.
// - NOT enough information; MAYBE MERGESORT if memory is available
// - QUICKSORT if memory is an issue and database isnt that large

//#8 - You want to teach sorting for the first time-
// BUBBLE SORT | SELECTION SORT

/**
 * BUBBLE SORT
 */
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        // Swap numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);

/**
 *
 * SELECTION SORT
 */
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    // set current index as minimum
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
}

selectionSort(numbers);
console.log(numbers);

/**
 * INSERTION SORT
 * BEST PERFORMANCE WHEN LIST IS ALMOST SORTED
 */

function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);

/**
 * MERGE SORT
 * STABLE ALGORITHM
 */

function mergeSort(array) {
  const length = array.length;

  if (length == 1) {
    return array;
  }

  // Split array in into right and left
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers);
console.log(answer);

/**
 * QUICK SORT
 */
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
  const len = array.length;
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);

/**
 * BUCKET SORT
 * RADIX SORT
 * COUNTING SORT
 * Sometimes if we have numbers within a certain range, they could be quicker
 */
