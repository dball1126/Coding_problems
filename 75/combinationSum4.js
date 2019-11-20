


var combinationSum4 = function (nums, target, memo = [], count = 0) {
    const reducer = (acc, val) => acc + val;
    if (memo.length > 0 && memo.reduce(reducer) === target) return memo;
    const allVals=[];
    nums.forEach(e => {
        count++;
        memo.push(e)
        if (memo.length > 0 && memo.reduce(reducer) === target){
        allVals.push(combinationSum4(nums.slice(count), target, [...memo], count))
        }
        
    })
    return allVals
};


console.log(combinationSum4([1,2,3], 4));