def first_uniq_char(s)
    return -1 if s.length == 0
    return 0 if s.length == 1

    anchor = 0
    explorer = 1
   

    while explorer < s.length
        if s[explorer] == s[anchor]
            temp = anchor
            until s[temp] != s[anchor] && anchor < s.length
                return -1 if s[temp].nil? || s[anchor].nil?
                anchor += 1
            end 

            explorer = anchor + 1
        else
            explorer += 1
        end
    end
    anchor >= s.length ? -1 : anchor
end


p first_uniq_char("dddccdbba")