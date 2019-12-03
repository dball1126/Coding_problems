def min_window(s, t)
  indicies, i, hash, str = [], 0 , {}, ""

  while i < s.length 
    c = s[i]
    if t.include?(c)
        str += c
        indicies.push(i + 1)
    elsif !str.empty?
        str += c
    end
    p str
    if str.include?(t)
        if !indicies.empty?
            i = indicies.shift -1
       
        end
        hash[str] = str 
        str = ""
  
    end
    i += 1
end
    return hash
end


p min_window(S = "ADOBECODEBANC", T = "ABC")