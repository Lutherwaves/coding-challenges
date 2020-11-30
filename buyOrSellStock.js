// an array = [1,2,3,4,5], the stock on i-th day = array[i]
// if one transaction per type (buy or sell), design an algorithm to find the maximum profit

// the maximum profit is achieved when we sell when the price is the highest, and buy when price is the lowest

// Brute force
// Iterate over each element, buy at the lowest price possible, sell only AFTER you have bought something

// Example: [1,2,3,4,5]
// We check [1] - currentProfit = -1 if we buy
// We check [1,2] - currentProfit if we buy on 0 and sell on 1 = 1
// We check [1,2,3] - currentProfit = Math.max(prevProfit, currentProfit)

var maxProfit2 = (prices) => {
  // If prices is empty OR === null, return 0, again no transaction
  if (prices === null || prices.length === 0) {
    return 0;
  }

  let currentMax = 0; // if profit is going to be negative, 0 is better => no transactions made

  // Iterate over elements to calculate the maximum profit
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let newMax = Math.max(prices[j] - prices[i], currentMax);
      currentMax = newMax;
    }
  } // O(n*n) = O(n^2)

  return currentMax;
};

var maxProfit2 = (prices) => {
  // If prices is empty OR === null, return 0, again no transaction
  if (prices === null || prices.length === 0) {
    return 0;
  }

  return prices
    .map((price, index) => {
      let currentMax = 0;
      for (let i = index + 1; i < prices.length; i++) {
        currentMax = Math.max(prices[i] - price, currentMax);
      }
      return currentMax;
    })
    .sort((a, b) => {
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    })[prices.length - 1];
};

var maxProfit = (prices) => {
  let length = prices.length;
  cost = 0;
  maxcost = 0;

  if (length === 0) {
    return 0;
  }

  min_price = prices[0]; // start at 0

  for (let i = 0; i < length; i++) {
    // compare first element with all the elements of the array and find the minimum element
    min_price = Math.min(min_price, prices[i]);

    // since min_price is smallest element of the array, subtract with every element of the array and return the maxcost
    cost = prices[i] - min_price;

    maxcost = Math.max(maxcost, cost);
  }
  return maxcost;
};

// console.log(maxProfit([7,1,5,3,6,4]))
maxProfit([7, 6, 5, 3, 2, 1]);
// maxProfit([1,2, 4])
// maxProfit([1,4])
// maxProfit([1,2])
// console.log(maxProfit([7,6,4,3,1]))
