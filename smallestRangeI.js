
A = [1, 3, 6];
K = 3;
var smallestRangeI = function (A, K) {
    let max = Math.max(...A) - K;
    let min = Math.min(...A) + -K;
    console.log(max)
    console.log(min)
    if (min > max) return 0;
    return max - Math.abs(min)
};



console.log(smallestRangeI(A, K))