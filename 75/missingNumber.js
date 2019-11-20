/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
*/

var missingNumber = function (nums) {
    
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    for (let min = 0; min <= max; min++) {
        if (nums.indexOf(min) === -1) return min
    }
};

console.log(missingNumber([3, 0, 1]))