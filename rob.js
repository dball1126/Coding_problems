function rob(nums) {
    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0]
    for (let i = 0; i < nums.length; i++) {
        nums[i] = Math.max((nums[i-2] || 0) + nums[i], (nums[i-1] || 0))
    }
    return nums[nums.length-1]
}

console.log(rob([2, 4, 8, 9, 9, 3]))