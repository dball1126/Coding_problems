def subsets(nums)
    subs = [[]]

    (0...nums.length).each do |i|
        (i...nums.length).each do |j|
                one = nums[i..j]
                two = [nums[i], nums[j]]

                if i != j && one != two
                    subs.push(two)
                    subs.push(one)
                else
                    subs.push(one)
                end
        end
    end
    return subs
end


p subsets(nums = [1,2,3])