def can_jump(nums)
    jump = Array.new(nums.length, nil)
    i = 0

    while i < nums.length
        return false if jump[i] == false
        j = nums[i]
        while j > i
            return true if nums[j] >= nums.length-1
           
            if jump[j] == nil && !(nums[j] + j >= nums.length - 1)
                jump[j] = false
            end

            j -= 1
        end
        i += 1
    end
    return false
end


p can_jump([2,3,1,1,4])