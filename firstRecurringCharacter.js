/**
 * Find the first recurring character and return it
 */

// First Solution (Brute force)
var firstRecurringCharacter = (array) => {
  // Base case
  if (!array.length == new Set(array).size) {
    console.log('No recurring characters');
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return array[i];
      }
    }
  }

  return undefined;
};

// Second soluton (Object)
var firstRecurringCharacter = (array) => {
  // Base case
  if (!array.length == new Set(array).size) {
    console.log('No recurring characters');
  }
  // Object approach
  let counts = {};
  for (let i = 0; i < array.length; i++) {
    if (counts[array[i]] !== undefined) {
      return array[i];
    } else {
      counts[array[i]] = 1;
    }
  }

  return undefined;
};

// Third solution (Map)
var firstRecurringCharacter = (array) => {
  // Base case
  if (!array.length == new Set(array).size) {
    console.log('No recurring characters');
  }

  let countsMap = new Map();
  for (let i = 0; i < array.length; i++) {
    if (countsMap.has(array[i])) {
      return array[i];
    } else {
      countsMap.set(array[i], 1);
    }
  }

  return undefined;
};
