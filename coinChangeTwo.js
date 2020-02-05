var change = function(amount, coins) {
    let dp = new Array(amount + 1).fill(-Infinity);
      dp[0] = 0;

      for (let i = 1; i < amount; i++) {
        for (let c = 0; c < coins.length; c++) {
          let coin = coins[c];
          if (coin <= i) {
            if (dp[i] === -Infinity) {
              dp[i] = dp[i] + 1
            } else {
              dp[i]++
            }
          }
        }
      }
      return dp
};


console.log(change(amount = 5, coins = [1, 2, 5]))