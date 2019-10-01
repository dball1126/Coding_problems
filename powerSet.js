function subset(arr) {
    size = arr.length;
    arr1 = [];
    arr2 = [];
    let set = new Set();
    for(let i = 0; i <= size -1; i++) {
        for(let j = i + 1; j <= size; j++) {
            arr1 = arr.slice(i, j);
            if(!set.has(arr1)) set.add(arr1);
        }
    }
    return set;
}

console.log(subset([1,2,3,4,5]))


// rotate binary tree 
// binary search
// guy who created homebrew
// facebook employee jumps off a building