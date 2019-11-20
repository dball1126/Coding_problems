
/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.
*/
// 3  1 2  1 1 1  2 1
//4     1 1 1 1      2 2     11 2      2 11       1 2 1     
var climbStairs = function (n, val= 0, count = 0, mainCount = 0, memo = {}) {
    if (val === n) return 0;
    if (val > n) return -1;
    if (String(count) in memo) return -1

    
    for (let i = count; i < n; i++) {
        mainCount += (climbStairs(n, val+=i, count++, mainCount, memo[count] = count) + 1)
        console.log(mainCount)
    }
    return mainCount
};

console.log(climbStairs(3))
console.log(climbStairs(2))