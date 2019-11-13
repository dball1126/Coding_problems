/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
Find all unique triplets in the array which gives the sum of zero.

*/


var threeSum = function (nums) {
    const reducer = (acc, val) => acc + val;
    const strReducer = (acc, val) => String(acc) + String(val);
    let set = new Set();
    let sums = []
    nums.sort(function(a,b){return a -b})
    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length + 1; j++) {

            let inner = [nums[i], nums[j]];
            for (let x = j + 1; x < nums.length + 2; x++) {
                
                inner.push(nums[x])
                let innerStr = inner.reduce(strReducer)
                if (inner.reduce(reducer) === 0 && !set.has(innerStr)) {
                    set.add(innerStr)
                    sums.push(inner);
                }
                inner = [nums[i], nums[j]]
            }
        }

    }
    return sums;

};

console.log(threeSum([-5, 1, -10, 2, -7, -13, -3, -8, 2, -15, 9, -3, -15, 13, -6, -10, 5, 6, 11, 1, 13, -12, 14, 6, 11, 4, 13, -14, 0, 11, 1, 10, -11, 6, -11, -10, 8, 2, -3, -13, -6, -9, -9, -6, 11, -8, -9, 1, 13, 9, 9, 3, 13, 0, -6, 1, -10, -15, 3, 5, 3, 11, -8, 0, 2, -11, 5, -13, 6, 9, -11, 7, 8, -13, 8, 4, -6, 14, 13, -15, 1, 7, -5, -1, -7, 5, 7, -2, -3, -13, 10, 7, 13, 9, -8, -8, 13, 12, -6, 4, 7, -10, -12, -8, -8, 11, 11, -6, 3, 9, -14, -11, 2, -4, -5, 10, 8, -13, -7, 12, -10, 10]))