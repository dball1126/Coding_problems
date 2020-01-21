var rotate = function(matrix) {
    for (let c = 0; c < matrix.length; c++) {
        for (let r = c; r < matrix[c].length; r++) {
            [matrix[c][r], matrix[r][c]] = [matrix[r][c], matrix[c][r]]            
        }
        matrix[c] = matrix[c].reverse()
    }
    return matrix;
};

console.log(rotate(matrix =
    [
      [ 5, 1, 9,11],
      [ 2, 4, 8,10],
      [13, 3, 6, 7],
      [15,14,12,16]
    ]))