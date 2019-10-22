let A = [4,2,5,7]

var sortArrayByParityII = function (A) {
    let truthy = false;
    while (truthy === false){
        truthy = true;

        for (let i = 0; i < A.length; i++) {
            let current = A[i];
            
            if (i-1 % 2 === 0 && previous % 2 !== 0) {
                
                [A[i], A[i-1]] = [A[-1], A[i]]
                truthy = false;
            }
            if (i % 2 === 1 && current % 2 !== 1){
                [A[i], A[i-1]] = [A[i-1], A[i]]
                truthy = false;
            }
        }
    }
    return A;
};


console.log(sortArrayByParityII(A))