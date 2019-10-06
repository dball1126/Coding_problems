function maxSubArray(nums) {
    if (!nums.length) return 0
    if (nums.length === 1) return nums[0]
    let sum = nums[0];

    for (let i = 1; i < nums.length; i++) {
      
            if (nums[i] < nums[i-1] + nums[i]) nums[i] = nums[i-1] + nums[i]
            sum = Math.max(sum, nums[i])
        
        
    }
    return sum
}



console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))















// let max = nums[0];

// for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < nums[i - 1] + nums[i]) nums[i] = nums[i - 1] + nums[i]
//     max = Math.max(max, nums[i])
// }

// return max;