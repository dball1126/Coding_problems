def closestGreaterNumber(arr)
    sortedArr = arr.sort
    
    returnArr = []
    (0..arr.length-1).each do |i|
        ele = sortedArr.index(arr[i])

        if(sortedArr[ele+1] === nil)
            returnArr.push(-1)
        else
            returnArr.push(sortedArr[ele+1])
        end
    end
    p returnArr
    end
puts closestGreaterNumber([10,5,11,6,20,12])