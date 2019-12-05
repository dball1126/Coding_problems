def longest_palindrome_substring(s)
    return s if s.length == 1
    i, j = 0, s.length-1
    
    while i <= j
        if s[i..j] == s[i..j].reverse
            return s[i..j]
        elsif s[i+1..j] == s[i+1..j].reverse
            i += 1
        elsif s[i..j-1] == s[i..j].reverse
            j -= 1
        else
            i += 1
            j -= 1
        end
    end

end

p longest_palindrome_substring("cbbd")