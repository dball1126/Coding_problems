function rob(nums) {
    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0]
        let arr1 = nums.slice(1);
        let arr2 = nums.slice(0, nums.length-1)
    
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Math.max((arr1[i - 2] || 0) + arr1[i], (arr1[i - 1] || 0))
        arr2[i] = Math.max((arr2[i - 2] || 0) + arr2[i], (arr2[i - 1] || 0))
    }
    return Math.max(arr1[arr1.length-1], arr2[arr2.length-1])
}

console.log(rob([2, 4, 8, 9, 9, 3]))