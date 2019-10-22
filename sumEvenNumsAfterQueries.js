var sumEvenAfterQueries = function(A, queries) {
    let sums = [];
    for (let i = 0; i < queries.length; i++) {
        let ele = queries[i]
        A[ele[1]] = A[ele[1]] + ele[0];
        sums.push(sum(A))
    }
    return sums;
};

function sum(A){
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        if (Math.abs(A[i] % 2) === 0) sum += A[i];
    }
    return sum;
}


console.log(sum([1,2,3,4]))

console.log(sumEvenAfterQueries([1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]))