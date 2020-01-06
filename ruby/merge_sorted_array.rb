
def merge(nums1, m, nums2, n)
    nums1 = nums1.slice(0...m) + nums2

   
    def quicksort(nums1)
       return nums1 if nums1.length <= 1
       pivot = nums1.shift

       left = nums1.select{|x| x <= pivot}
       right = nums1.select{|x| x > pivot}

       return quicksort(left).push(pivot).concat(quicksort(right))
    end

    return quicksort(nums1)

end

p merge(nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6],       n = 3)