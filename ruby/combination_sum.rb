def combination_sum4(nums, target)
    set, narr = {}, []

    def help(arr, target, narr, set)
        return if narr.sum > target
       
        if narr.sum == target && !set.include?(narr)
            set[narr] = narr
            return
        end

        arr.each do |ele|
            help(arr, target, [*narr, ele], set)
        end
       
    end

    help(nums, target, narr, set)

    return set.values.count
end

p combination_sum4([4,2,1],
    32)