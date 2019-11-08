// n is > 1

var productExceptSelf = function (nums) {
    let results = [];
    for (let i = 0; i < nums.length; i++) {
        results.push(product(i, nums.slice(0)));
    }
    return results;
};

const product = function (idx, nums) {
    nums[idx] = 1;
    const reducer = (acc, val) => acc * val;
    return nums.reduce(reducer) 
}


console.log( productExceptSelf([1,2,3,4]));