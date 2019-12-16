def three_sum(nums)
   i = 0
   arr = []
   indicies = []
    set = {}
    def help(nums, arr, i, set, indicies)
       return if set.has_key?(arr) || arr.length > 3 || indicies.uniq.length != indicies.length
       if (arr.length === 3 && !set.has_key?(arr.sort) && arr.sum === 0 && indicies.uniq.length === 3) 
        set[arr.sort] = indicies
        return
       end

       while i < nums.length

            help(nums, [*arr, nums[i]], i, set, [*indicies, i])
            i += 1
        end
    end
    
   help(nums, arr, 0, set, indicies)
   return set.keys

end
# DP and recursion
p three_sum(
    [-13,5,13,12,-2,-11,-1,12,-3,0,-3,-7,-7,-5,-3,-15,-2,14,14,13,6,-11,-11,5,-15,-14,5,-5,-2,0,3,-8,-10,-7,11,-5,-10,-5,-7,-6,2,5,3,2,7,7,3,-10,-2,2,-12,-11,-1,14,10,-9,-15,-8,-7,-9,7,3,-2,5,11,-13,-15,8,-3,-7,-12,7,5,-2,-6,-3,-10,4,2,-5,14,-3,-1,-10,-3,-14,-4,-3,-7,-4,3,8,14,9,-2,10,11,-10,-4,-15,-9,-1,-1,3,4,1,8,1])