def find_min(nums, check = false)
    return false if nums.length < 1
   return nums[0] if !check && nums.length == 1
   return [nums[0], nums[1]].min if !check && nums.length == 2
    check = true
    mid = nums.length / 2
   
    return [nums[0], nums[1]].min if nums.length == 2
    left = nums.slice(0, mid)
    right = nums.slice(mid+1, nums.length)
    current = nums[mid]
    
    prev = nums[mid-1]
    nexer = nums[mid+1]
    if (prev > current && nexer > current)
        return current
    elsif (!prev.nil? && prev > current)
        return prev
    elsif (!nexer.nil? && nexer< current)
        return nexer
    elsif left.length > 0
        l = find_min(left, check)
       return l if l != false
    elsif right.length > 0
       r = find_min(right, check)
       return r if r != false
    end
    
    return [nums[0], nums[nums.length-1]].min
end

puts find_min([3,2,1] )