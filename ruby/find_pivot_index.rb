def pivot_index(nums)
   return -1 if nums.length < 3
   return nums[0] == nums[2] ? nums[1] : -1 if nums.length == 3
    mid1 = nums.length / 2
    mid2 = (nums.length / 2 )+ 1
    i = nums.length 
    while i < nums.length
        
        if mid1-1 >= 0
            return mid1 if nums[0...mid1].sum == nums[mid1+1..nums.length].sum
        end

        if mid2+1 < nums.length
            return mid2 if nums[0...mid2].sum == nums[mid2+1..nums.length].sum
        end
        mid1 -= 1
        mid2 += 1
        i += 1
    end
    nums.sum == 0 ? 0 : -1
end


p pivot_index(nums = 
    
    [-1,-1,-1,0,1,1])