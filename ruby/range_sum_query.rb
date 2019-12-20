class NumArray

   attr_accessor :nums
        def initialize(nums)
            @nums = nums
        end
    
    
  
        def sum_range(i, j)
            sum = 0
        while i <= j
            sum += nums[i]
            i += 1
        end
        return sum
        end
    
    
    end


    obj = NumArray.new([-2,0,3,-5,2, -1])

    p obj.sum_range(2, 5)