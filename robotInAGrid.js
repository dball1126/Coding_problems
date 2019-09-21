function robot(grid) {
    let pos = [0][0];
    let route = {}
    for (let i = 0; i < grid[0].length; i++) {
        for (let j = 0; j < grid.length; j++) {
           let position = [i][j];

           if(grid[i][j] !== "x"){
               route[grid[position]] = position
           }
            
        }
        
    }
    return route
}


let  arr = ["t", "t", "t"]
    arr2 = ["d", "x", "x"]
    arr3 = ["c", "c", "c"]

const grid = [arr, arr2, arr3];

console.log(robot(grid))