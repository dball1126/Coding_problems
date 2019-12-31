def remove_element(nums, val)
  nums.sort!
  index = nums.index(val)
    while !index.nil?
       index = 1 if index == 0
       first = nums[0...index]
       last = nums[index+1..nums.length]
       nums = first.concat(last)
       index = nums.index(val)
    end
    return nums
end


p remove_element([0,1,2,2,3,0,4,2],
    2)