def character_replacement(s, k)
    str, i , k_tracker, idx, max = "", 0, 0, 0, 0

    while i < s.length && idx != s.length-1
        current = s[i]
        if str.length == 0
            str += current
        elsif str.include?(current)
            str += current
        elsif !str.include?(current) && k_tracker > 0
            idx = i if k_tracker == 2
            k_tracker -= 1
            str += str[0]
        else
            max = [max, str.length].max
            k_tracker = k
            i = 0
            
end