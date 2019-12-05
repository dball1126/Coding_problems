def is_palindrome(s)
    return true if s.length == 1 || s.length == 0
    alpha = ("a".."z").to_a + ("0".."1").to_a
    
    s = s.split("").select{|x| alpha.include?(x.downcase)}
    i, j = 0, s.length-1
    while i < j
        return false if s[i].downcase != s[j].downcase
        i += 1
        j -= 1
    end
    true    
end

p is_palindrome("A man, a plan, a canal: Panama")