class Node
    attr_accessor :key, :value, :next
    def initialize(key, value)
        self.key = key
        self.value = value
        self.next = nil;
    end
end

class MyHashMap
    attr_accessor :table, :multiplier

    def initialize()
        self.table = [];
        self.multiplier = 123456
    end
    
    def put(key, value)
        actual_key = key % self.multiplier
        if self.table[actual_key] === nil
            self.table[actual_key] = Node.new(key, value)
        else
            head = self.table[actual_key]
            while head != nil
                if head.key === key
                    head.value = value
                    return
                end
                head = head.next
            end

            newHead = self.table[actual_key]
            newHead.next = Node.new(key, value)
        end
    end
    
    def get(key)
        actual_key = key % self.multiplier
        node = self.table[actual_key]
        if node == nil
            return -1
        else
            while node != nil
                return node.value if node.key == key
                node = node.next
            end
        end
        return -1
    end
    
    def remove(key)
        actual_key = key % self.multiplier
        node = self.table[actual_key]
        if node == nil
            return
        else
            new_head = nil;
            while node != nil
                if node.key != key && new_head == nil
                    new_head = node
                elsif node.key != key
                    new_head.next = node
                end
                node = node.next
            end

            self.table[actual_key] = new_head
        end
    end    
end

# Your MyHashSet object will be instantiated and called as such:
obj = MyHashMap.new()
obj.put(1,1)
obj.put(2,2)
 obj.get(1)
 obj.get(3)
obj.put(2, 1)
obj.get(2)
obj.remove(2)
p obj.get(2)