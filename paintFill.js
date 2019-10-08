// const paintFill = (matrix, r, c, newColor) => {
    
//     for (let i = 0; i < matrix[0].length; i++) {
//         for (let j = 0; j < matrix.length; j++) {
//             if (i === r && j === c) {
//                 continue
//             }
//             matrix[i][j] = newColor;
            
//         }
        
//     }
//     return matrix;
// }

const paint = (matrix, r, c, newColor) => {
    
    function inBounds(matrix, row, column, newColor){
        // if (r === row && column === c) return;
        return row >= 0 && row < matrix[0].length && column >= 0 && column < matrix.length;
    }
    if (inBounds(matrix, r, c, newColor)){
        matrix[r][c] = newColor
    }

    if (inBounds(matrix, r + 1, c, newColor)){
        matrix[r+1][c] = newColor
    }

    if (inBounds(matrix, r - 1, c, newColor)){
        matrix[r-1][c] = newColor
    }

    if (inBounds(matrix, r, c +1, newColor)){
        matrix[r][c+1] = newColor
    }

    if (inBounds(matrix, r, c - 1, newColor)){
        matrix[r][c-1] = newColor
    }

    if (inBounds(matrix, r + 1, c + 1, newColor)){
        matrix[r+1][c+ 1] = newColor
    }

    if (inBounds(matrix, r -1, c -1, newColor)){
        matrix[r-1][c-1] = newColor
    }

    if (inBounds(matrix, r + 1, c -1, newColor)){
        matrix[r+1][c-1] = newColor
    }

    if (inBounds(matrix, r - 1, c + 1, newColor)){
        matrix[r-1][c+ 1] = newColor
    }

   
    return matrix;
}


let matrix = [[1, 1, 1],
              [1, 1, 1],
              [1, 1, 1]]
console.log(paint(matrix, 1, 1, 0))