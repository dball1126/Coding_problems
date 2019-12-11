def min_domino_rotations(a, b)
    return 0 if a.length == 1 && b.length == 1 && a[0] != b[0]

    aa, bb = a.dup, b.dup
    ahash, bhash, = Hash.new(0), Hash.new(0)
    a.each{|x| ahash[x] += 1}
    b.each{|x| bhash[x] += 1}
    
    min = Float::INFINITY
    
    ahash.sort_by{|k, v| v > v}.each do |k, v|
        
        if bhash.has_key?(k)
            if bhash[k] + v >= a.length
                min = [min, a.length - v].min
            end
        end
    end

    bhash.sort_by{|k, v| v > v}.each do |k, v|
        if ahash.has_key?(k)
            if ahash[k] + v >= b.length
                min = [min, b.length - v].min
            end
        end
    end
    min == Float::INFINITY ? -1 : min
end


p min_domino_rotations([1],[2])