def rob(nums)
    return nums[0] if nums.length == 1
    return nums.max if nums.length == 2

    left = nums[0...nums.length-1]
    right = nums[1..nums.length]
    i, maxl, maxr = 2, left[0...2].max, right[0...2].max

    while i < nums.length-1
        left[i] = [left[i], left[i-2] + left[i]].max
        maxl = [left[i], maxl].max
        right[i] = [right[i], right[i-2] + right[i]].max
        maxr = [right[i], maxr].max
        i += 1
    end
    return [maxl, maxr].max
end

p rob([1,3,1,3,100])