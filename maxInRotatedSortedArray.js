var findMin = function (nums) {
    let min = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > min) {
            continue
        } else if (nums[i] < min) {
            min = nums[i]
        } else {
            return nums[i]
        }
    }
    return min;
};

console.log(findMin([3, 4, 5, 1, 2] ))