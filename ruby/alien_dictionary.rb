def is_alien_sorted(words, order)
    return true if words.length == 1
    newWords = []
    words.each{|word| 
            newWords << word.split("").map{|w| order.index(w)}}
    (1..newWords.length).each do |j|
        prev = newWords[j-1]
        current = newWords[j]
        i = 0;
        while i < prev.length
            return false if prev[i] > current[i]
            i += 1
        end
        if current.length < i && current.length < prev.length
            return false
        end
    end
    true
end


p is_alien_sorted(words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz")