var maxProduct = function (nums) {
    if (!nums.length) return null;
    let arrays = [];
    const reducer = (acc, val) => acc * val;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length+1; j++) {
            arrays.push(nums.slice(i, j))
            
        }
        
    }
    return Math.max(...arrays.map(e => e.reduce(reducer)));

};

console.log(maxProduct([2, -5, -2, -4, 3]));