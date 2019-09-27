// function countWays(n, memo = {}) {
//     if (n in memo) {
//         console.log(memo)
//         return memo[n];
//     }
//     if (n < 0) {
//         return 0;
//     } else if (n === 0){
//         return 1
//     } else if (n > -1)
//     memo[n] = countWays(n-1, memo) + countWays(n-2, memo) + countWays(n - 3, memo)
//     // console.log(memo)
//     return memo[n]
// }
function countWays(n) {
   
    if (n < 0) {
        return 0;
    } else if (n === 0){
        return 1
    } else if (n > -1)
    val = countWays(n-1) + countWays(n-2) + countWays(n - 3)
    // console.log(memo)
    return val
}


console.log(countWays(37))