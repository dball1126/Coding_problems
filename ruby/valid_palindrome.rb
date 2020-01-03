require 'set';
def is_palindrome(s)
    return true if s.length == 1 || s.length == 0
    alpha = ("a".."z").to_a + ("0".."9").to_a
    alpha = alpha.to_set
    i, j = 0, s.length-1
    
    while i < j       

        if !alpha.include?(s[i].downcase)
            i += 1
        elsif !alpha.include?(s[j].downcase)
            j -= 1
        else
                return false if s[i].downcase != s[j].downcase
            i += 1
            j -= 1
        end
    end
    true    
end

p is_palindrome("cc")