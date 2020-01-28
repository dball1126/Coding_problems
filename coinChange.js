/*
You are given coins of different denominations and a total amount of money amount. 
Write a function to compute the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.
*/

const coinChange =  (coins, amount) => {
  let dp = new Array(amount + 1).fill(amount + 1);
      dp[0] = 0;

      for (let i = 1; i < dp.length; i++) {
        for (let c = 0; c < coins.length; c++) {
          let coin = coins[c];
          if (coin <= i) {
            dp[i] = Math.min(dp[i], 1 + dp[i - coin])
          }
        }
      }
      return dp[amount];
};

console.log(coinChange(coins = [1, 2, 5], amount = 11))