arr = [1,1,2,2,3,3,3,7,7]

def max_odd_occurrance(arr)
    hash = Hash.new
    (0...arr.length).each do |i|
        current = arr[i]
        if !hash.include?(current)
            hash[current] = 1
        else  
            hash[current] += 1
        end
    end
    new_hash = hash.select{|k, v| v.odd?}
     new_hash.sort_by{|k, v| v > v}.reverse
    # new_hash.each{|k, v| p "#{k} and #{v}"}
    # p new_hash
    new_hash.each{|k, v| return k}
end


p max_odd_occurrance(arr)