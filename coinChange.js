/*
You are given coins of different denominations and a total amount of money amount. 
Write a function to compute the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.
*/

var coinChange = function (coins, amount, counter = 0) {
    if (amount === 0) return counter;
    if (amount < 0) return -1;
    let allAmounts = [];
    coins.forEach(coin => {
       counter++
       if (amoung > coin) continue 
       amount -= coin
        
         allAmounts.push(coinChange(coins, amount, counter))
      
    })
    return allAmounts
};

console.log(coinChange(coins = [1, 2, 5], amount = 11))