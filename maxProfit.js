// Best Time to Buy and Sell a Stock

var maxProfit = function (prices) {
    let buy = 0, sell = 0;
    let maxProfit = 0;
    buy = prices[0];
    for (let i = 1; i < prices.length; i++) {
        sell = prices[i];
        if (buy > sell) {
            buy = sell;
        } else {
            maxProfit = Math.max(sell - buy, maxProfit);  
        }
    }
    return maxProfit
};

console.log(maxProfit([7,6,4,3,1]));