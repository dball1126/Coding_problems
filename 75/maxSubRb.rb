def max_sub_array(nums)
    return nums[0] if nums.length == 1

    max = nums[0]
    new_max = max
    (1...nums.length).each do |i|
        current = nums[i]
        nums[i] = [nums[i], nums[i] + nums[i-1]].max
        max = [max, nums[i]].max
    end
    return max
end

p max_sub_array([4,-1])