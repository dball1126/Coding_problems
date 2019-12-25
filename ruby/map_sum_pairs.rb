class Node
    attr_accessor :value, :children, :last

    def initialize()
        self.value = 0;
        self.children = {};
        self.last = false;
    end
end


class MapSum
    attr_accessor :root
  
        def initialize()
            self.root = Node.new();
        end

        def insert(key, val, root = self.root)
           return if (key.length === 0 || key === nil)
            letter = key[0]
            rest = key.slice(1, key.length)

            root.children[letter] = Node.new() if (!(root.children.has_key?(letter))) 
            if rest.length === 0
                root.children[letter].last = true 
                root.children[letter].value = val
            end

            self.insert(rest, val, root.children[letter])
        end
    
        def sum(prefix, root = self.root)
           
        end
    end

# Your MapSum object will be instantiated and called as such:
 obj = MapSum.new()
 obj.insert('apple', 3);
 obj.insert('app', 2);
 p obj.sum('')
# param_2 = obj.sum(prefix)
    