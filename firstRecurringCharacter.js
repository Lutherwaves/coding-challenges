var firstRecurringCharacter = (array) => {
  // check input
  if (!array.length == new Set(array).size) {
    console.log('No recurring characters');
  }
  // Brute force
  // for (let i =0; i < array.length; i++) {
  //   for (let j = i+1; j < array.length; j++) {
  //     if(array[i] === array[j]) {
  //       return array[i];
  //     }

  //   }
  // } // O(n^2)

  // Object approach
  let counts = {};
  for (let i = 0; i < array.length; i++) {
    if (counts[array[i]] !== undefined) {
      return array[i];
    } else {
      counts[array[i]] = 1;
    }
  }

  // Map approach
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
