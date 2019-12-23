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
        p root
        return if word.empty?
         letter = word[0]
         rest = word[1..word.length]
         
         if (!(root.children.has_key?(letter)))
             root.children[letter] = Node.new()
         end
         if rest.length == 0
             root.children[letter].isTerminal = true
         end
         self.insert(rest, root.children[letter])
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
p trie
p node.isTerminal