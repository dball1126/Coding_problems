def count_substrings(s)
    return 1 if s.length == 1
    count, i, j = 0, 0, s.length-1

    while i < s.length && j >= 0
        i += 1 
        j -= 1

        count += 1 if s[i..(s.length)] == s[i...(s.length)].reverse
        count += 1 if s[0..j] == s[0..j].reverse
    end
    
    count
end

p count_substrings("a")