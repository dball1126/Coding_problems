var thirdMax = function(nums) {
    let max1 = 0, max2 = 0, max3 = 0;
    if (nums.length < 3) return Math.max(...nums);

    for (let i = 0; i < nums.length; i++) {
        let ele = nums[i];

        if (ele === max1 || ele === max2 || ele === max3) continue;

        if (max1 < ele) {
            max3 = max2
            max2 = max1
            max1 = ele;
        } else if (max2 < ele || max2 === max1) {
            max3 = max2
            max2 = ele
        } else if (max3 < ele || max3 === max2) {
            max3 = ele
        }

    }
    return max3 !== 0 && max2 !== 0 ? max3 : max1
};


console.log(thirdMax([2, 2, 1]))