def three_sum(nums)
    nums.sort!
    set, l = {}, 0
    while l < nums.length
        r = nums.length-1
        m = l+1
        tracker = false
        mm = l+1
        rr = l+2

    while (m < r && rr < nums.length)
        
        current = [nums[l], nums[m], nums[r]]
        current2 = [nums[l], nums[mm], nums[rr]]
        
        p current
        if !set.include?(current) && current.sum == 0
            set[current] = current
        end
        
        if !set.include?(current2) && current2.sum == 0
            set[current2] = current2
        end
        r -= 1
        m += 1
        mm += 1
        rr += 1
    end
    l += 1

    end
    return [*set.values]
    
end


p three_sum(
    [-1,0,1,2,-1,-4])