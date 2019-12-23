def decode(ways)
    return 0 if ways.length <= 0
    aa = ("a".."z").to_a
    aa.unshift(0)

    count = 0

    (0...ways.length).each do |i|
        ele = ways[i..i+1]

        if !ele.nil?
            count += 1 if !aa[ele.to_i].nil? && ele.to_i != 0
        end
    end
    return count
end


p decode("0")