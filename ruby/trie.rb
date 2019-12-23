class Node
    attr_accessor :isTerminal, :children
    def initialize
        self.isTerminal = false
        self.children = {}
    end
end

class Trie
    attr_accessor :root
    def initialize
        self.root = Node.new()
    end

    def insert(word, root = self.root)
        letter = word[0]
        rest = word[1..word.length]
        
        return if word.empty?
         
        root.children[letter] = Node.new() if (!(root.children.has_key?(letter)))
        root.children[letter].isTerminal = true if rest.length == 0
              
         self.insert(rest, root.children[letter])
     end


     def search(word, root = self.root)
        letter = word[0]
        rest = word[1..word.length]

       return false if word.empty? || !(root.children.has_key?(letter))
       return true if word.length == 1 && root.children[letter].isTerminal
       
       return self.search(rest, root.children[letter])
    end

    def starts_with(prefix, root = self.root)
        letter = prefix[0]
        rest = prefix[1..prefix.length]

        return false if prefix.empty?
        return false if !(root.children.has_key?(letter))
        return true if prefix.length == 1
        
        return self.starts_with(rest, root.children[letter])
    end
end

node = Node.new()
trie = Trie.new()
trie.insert('ten')
trie.insert('tea')
trie.insert('tex')
trie.insert('taco')
trie.insert('in')
trie.insert('inn')
trie.insert('inside')
trie.insert('instructor')
p trie.starts_with('')