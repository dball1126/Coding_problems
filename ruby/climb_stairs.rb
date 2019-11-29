def climb_stairs(num)
    hashCounter = Hash.new

    def help(num, arr = [], hash = {})
        return if hash.include?(arr)
        if arr.sum == num && !hash.include?(arr)
            hash[arr] = arr 
            return
        elsif arr.sum > num
            return
        elsif !arr.include?(arr)
            help(num, [*arr, 1], hash)
            help(num, [*arr, 2], hash)
        end
    end
    i = 1
    while i <= num 
        hash = Hash.new
        if hashCounter.keys.length > 2 
            hashCounter[i] = hashCounter[i-1] + hashCounter[i-2]
        else
            help(i, [], hash)
            hashCounter[i] = hash.values.count
        end

    i+=1
    end
    return hashCounter[num]
end

puts climb_stairs(35)