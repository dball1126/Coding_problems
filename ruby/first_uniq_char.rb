def first_uniq_char(s)
    hash = Hash.new(0)
    key = ""
    
    (0...s.length).each do |i|
        ele = s[i]
        hash[ele] += 1
        if key == "" && hash[ele] == 1
            key = ele
        end
    end
    
    key == "" ? -1 : key
end


p first_uniq_char("leetcode")