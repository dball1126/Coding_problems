def split_arr(nums, m)
    min = Float::INFINITY

    nums.each_with_index do |e, i|
        j, sub = 0, []
        while j < m+i || j < i
            sub.push(nums[j])
            j += 1
        end
        left = nums[0...i]
        right = nums[i..nums.length]
        if left.length > 0 && right.length > 0 && (left.length >= m || right.length >= m)
            min = [left.sum, right.sum].min
        end
    end
    return min
end

p split_arr(nums = [7,2,5,10,8],
    m = 2)