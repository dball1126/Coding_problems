
A = [1];
K = 0;
var smallestRangeI = function (A, K) {
   
    let max = Math.max(...A) - K;
    let min = Math.min(...A) + K;
    if (min > max || A.length === 1) return 0;
    return max - Math.abs(min);

};



console.log(smallestRangeI(A, K))