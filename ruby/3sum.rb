def three_sum(nums)
    arr, i = [], 0
    nums.sort!
   
    while i < nums.length-2
        l = i + 1;
        r = nums.length-1
        
        while l < r
            
            current, left, right = nums[i], nums[l], nums[r]

            if current + left + right == 0
                arr << [current, left, right]
            end

            if left + right + current < 0
                l += 1
                prev = left
                while (prev == left && l < r )
                    l += 1
                end
            else
                r -= 1
            end
        end
        i += 1
    end
    return arr
end
# DP and recursion
p three_sum(
    
[0,0,0])