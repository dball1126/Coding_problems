def longest_palindrome_substring(s)
    max = ""
    (0...s.length).each do |i|
        (i...s.length).each do |j|
            sub = s[i..j]
           if sub == sub.reverse
            max = sub if sub.length > max.length
           end
        end
    end
   
    return max
end

p longest_palindrome_substring("babad")