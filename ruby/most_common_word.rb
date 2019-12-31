require 'set'

def most_common_word(paragraph, banned)
    paragraph.gsub!(",", " ")
    paragraph.gsub!(".", " ") #"Notice the bang which modifies the variable in place and removes the elements"
    paragraph.gsub!("!", " ")
    paragraph.gsub!("?", " ")
    paragraph.gsub!("'", " ")
    paragraph.gsub!(":", " ")
    paragraph.gsub!(";", " ")
    
    banned_words = Set.new #"Our Set"
    banned.each{|word| banned_words.add(word)} #"Add banned words to the set"
    hashed_words = Hash.new(0) # "Default hash items counter set to zero"

    paragraph.split(" ").each{|word| hashed_words[word.downcase] += 1 if !banned_words.include?(word.downcase) }
    #"We downcase before inserting into our hashed_words and we dowcase for the banned words set check as well"
    hashed_words = hashed_words.sort_by{|k, v| v}.reverse #"Sort by the value and reverse it to have the highest in the front"
    
    hashed_words.each{|k, v| return k} #"We iterate across the hashed_words and simply return the very first Key...Word"
    
end

p most_common_word(
    "a, a, a, a, b,b,b,c, c",
    ["a"])