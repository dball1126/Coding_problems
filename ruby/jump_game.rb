def can_jump(nums)
    return true if nums.length == 1
    last = nums.length-1
    start = nums[0]
    return true if start >= last

    nums[1..nums.length].each_with_index do |ele, i|
        if start <= (i + 1)
            return true if ele >= (last-i+1)
        end
    end
    false
end


p can_jump([3,2,1,0,4])