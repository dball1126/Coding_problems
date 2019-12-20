def remove_duplicates(nums)
    prev = nil;
    
    (0...nums.length).each do |i|
        ele = nums[i]
        (0...i).each do |j|
            nums[j] = nil if nums[i] == nums[j]
        end
    end
   
    nums.select{|x| x.is_a? Integer }
end

p remove_duplicates(nums = [0])