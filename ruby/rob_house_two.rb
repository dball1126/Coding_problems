def rob(nums)
    return 0 if nums.empty?
    return nums[0] if nums.length == 1
    return nums.max if nums.length <= 3

    first = nums.slice(0...nums.length-1)
    second = nums.slice(1...nums.length)

    first[1] = [first[0], first[1]].max
    second[1] = [second[0], second[1]].max
    i = 2
    while i < first.length
       
        first[i] = [(first[i] + first[i-2]), first[i-1]].max
        second[i] = [second[i] + second[i-2], second[i-1]].max

        i +=1 
    end
    return [first.last, second.last].max
end

p rob([8,4,8,5,9,6,5,4,4,10])