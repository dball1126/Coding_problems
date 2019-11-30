def max_area(height)
   return height[0] if height.length == 1
   
    l, r, max = 0, height.length-1 , 0

    while (l < height.length && r >= 0)

        max = [[height[l], height[r]].min * (r-l), max].max
         
        if height[l] < height[r]
            l += 1
        else
            r -= 1
        end
    end
    return max
end

p max_area([1,8,6,2,5,4,8,3,7])