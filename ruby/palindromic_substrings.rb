def count_substrings(s)
   return 0 if s.empty?
   return 1 if s.length == 1
    count = 0
    (0...s.length).each do |i|
        (i...s.length).each do |j|
            sub = s[i..j]
            count += 1 if sub == sub.reverse
        end
    end
    return count
end

p count_substrings("aaa")