# def is_anagram(s, t)
#     hash = Hash.new(0)
#     s.split("").each{|i| hash[i] += 1}
#     t.split("").each do |i|
#         return false if hash[i] == 0 || !hash.has_key?(i)
#     end
#     return true
# end

def is_anagram(s, t)
    return false if s.length != t.length
   s.split("").each do |i|
    idx = t.index(i)
    return false if idx == nil || idx == '0'
    t[idx] = '0'
   end
   true 
end

p is_anagram(s = "rat", t = "car")