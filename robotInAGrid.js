var findPaths = function (grid) {
    var paths = [];
    let cache = new Set();
    var endRow = grid.length - 1;
    var endCol = grid[0].length - 1;
     var recurse = function (row, col, currPath, cache) {
        if (cache.has([row, col])) return
        if (row === endRow && col === endCol ) {
            paths.push(currPath.concat([[row, col+1]]));
        } else if (row <= endRow && col <= endCol && !cache.has([row][col+1])) {
            if (row < endRow && grid[row + 1][col] !== 'x' ) {
                if(grid[row][col+1] === 'x'){
                    cache.add([row+1, col])
                }
                recurse(row + 1, col, currPath.concat([[row, col]]), cache);
            }
            if (col < endCol && grid[row][col + 1] !== 'x' && !cache.has([row+1, col])) {
                if(grid[row+1][col] === 'x'){
                    cache.add([row, col+1])
                }
                recurse(row, col + 1, currPath.concat([[row, col]]), cache);
            }
        }
    };
    recurse(0, 0, [], cache);
    return paths;
};

/* TEST */

var grid = [
    ['0', '0', '0'],
    ['0', 'x', '0'],
    ['0', 'x', '0'],
    // ['0', '0', '0'],
    // ['0', 'x', '0'],
    // ['0', 'x', '0'],
    // ['0', 'x', '0'],
    // ['0', 'x', '0'],
    // ['0', 'x', '0'],
    // ['0', 'x', '0'],
    // ['0', 'x', '0'],
    // ['0', 'x', '0'],
    // ['0', 'x', '0'],
    // ['0', 'x', '0'],
    // ['0', 'x', '0'],
    // ['0', 'x', '0'],
];

console.log(findPaths(grid));
