var transpose = function (A) {
    let arr = [];
    for (let i = 0; i < A[0].length; i++) {
        let temp = [];

        for (j = 0; j < A.length; j++) {
            
            temp.push(A[j][i])
           
            }
        arr.push(temp)
   
    }
    return arr;
};
A = [[1, 2, 3], [4, 5, 6]]
 
// 0 0, 1 0, 2 0

// 0 1, 1 1, 2 1

// 0 2, 1 2, 2 2

// if (i > A.length)

console.log(transpose(A))