//  input = [-6, 0, 1, 2, -1, -4]
//  output = 0 
//  answer = [-1, 0 , 1]
// give a target and only one option, return the array of 3 characters that finds
// a sum to the given target

var threeSum = function (nums, target) {
    const reducer = (acc, val) => acc + val;
    
    for (let i = 0; i < nums.length; i++) {
        
       for (let j = i+1; j < nums.length+1; j++) {

          let inner = [nums[i], nums[j]]; 
           for (let x = j+1; x < nums.length+2; x++) {
               inner.push(nums[x])
               if (inner.reduce(reducer) === target) return inner;
               inner = [nums[i], nums[j]]
           }
        }
        
    }
    return [];
};

console.log(threeSum(nums = [-6, 0, 1, 2, -1, -4], target = -11))