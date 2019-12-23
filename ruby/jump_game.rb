def can_jump(nums)
    return true if nums.length == 1
    
    stack = [nums[0]]
    fin = nums.length-1

    nums.each_with_index do |ele, idx|
        
        last = nums[ele]
        nums[idx..last].each_with_index do |ele2, idx2|
            
        end

    end

end


p can_jump([2,3,1,1,4])