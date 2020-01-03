def move_zeroes(nums)
    flag = false
    
    while flag == false
        flag = true
        nums.each_with_index do |num, i|
            if num == 0 && i+1 <= nums.length-1
                if nums[i+1] != 0
                    nums[i], nums[i+1] = nums[i+1], nums[i]
                    flag = false
                end
            end
        end
    end
    return nums
end

p move_zeroes([0,1,0,3,12])