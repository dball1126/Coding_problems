function maxSubArray(nums) {
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1] + nums[i]) nums[i] = nums[i - 1] + nums[i]
        max = Math.max(max, nums[i])
    }

    return max;
}



console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))