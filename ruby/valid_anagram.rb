

def is_anagram(s, t)
    s.split("").each do |char|
        if t.index(char).nil?
            return false
        else
            t[t.index(char)] = "-"
        end
    end
   return true
end

p is_anagram(s = "rat", t = "car")