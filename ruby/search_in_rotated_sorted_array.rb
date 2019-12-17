def search(nums, target)
    return -1 if nums.empty?

    mid = nums.length / 2
    l = nums[0...mid]
    r = nums[mid+1..nums.length]

   

    if (nums[mid] == target)
        return mid
    elsif target < nums[mid]
        return search(l, target)
    else
        right = search(r, target)
        return right if right == -1
        return (right + mid) + 1
    end
end


p search(nums = [4,5,6,7,0,1,2], target = 0)