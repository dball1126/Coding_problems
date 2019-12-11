def top_k_frequent(nums, k)
    hash = Hash.new(0)

    nums.each{|x| hash[x] += 1}
    arr = []
    hash = hash.sort_by{|k, v| v}.reverse
    
    hash.each{|key, v|
        return arr if arr.length == k
            arr.push(key)
    }
    return arr
end

p top_k_frequent(nums = [3,0,1,0], k = 1)