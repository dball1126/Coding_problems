
def group_anagrams(arr)
    main = []
    sub = []
    arr.each do |w|
        if sub.empty?
            sub.push(w)
        elsif is_valid(sub.last, w)
            sub.push(w)
        else
            main.push(sub)
            sub = [w]
        end
    end
    main.last != sub ? main.push(sub) : main
end

def is_valid(s, t)
    s.split("").sort == t.split("").sort
end


p group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"])