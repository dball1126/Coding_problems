/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
*/

var searchMatrix = function (matrix, target) {



    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i+1] && matrix[i+1][i] < target) continue
        for (let j = 0; j < matrix[0].length; j++) {
            let ele = matrix[i][j];
            if (ele === target) return true;
        }
        
    }
    return false;
};

console.log(searchMatrix(matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
],
target = 11))