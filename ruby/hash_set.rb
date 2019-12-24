class Node
    attr_accessor :value, :next
    def initialize(value)
        self.value = value;
        self.next = nil;
    end
end

class MyHashSet
    attr_accessor :set, :multiplier
    def initialize()
        self.set = Array.new();
        self.multiplier = 100000
    end
    
    def add(key)
        actual_key = key % self.multiplier
        return actual_key
        if !self.contains(key)
            self.set[actual_key] = Node.new(key)
        else
            head = self.set[actual_key]
            while head != nil
                return if head.value == key
                head = head.next
            end

            newHead = Node.new(key)
            node = self.set[actual_key]
            newHead.next = node
            self.set[actual_key] = node
        end
    end

    def remove(key)
        actual_key = key % self.multiplier
        head = self.set[actual_key]
        return if head == nil
        newHead = nil

        head = head.next  if head.value == key

        while (head != nil)
            if head.value == key
                head = head.next
            elsif newHead == nil
                newHead = Node.new(head.value)
            else
                newHead.next = head
                head = head.next
            end
        end
        self.set[actual_key] = newHead
    end

    def contains(key)
        actual_key = key % self.multiplier
        if self.set[actual_key] == nil
            return false
        else
            head = self.set[actual_key]
            while head != nil
                return true if head.value == key
                head = head.next
            end
        end
        return false
    end
end
    
    # Your MyHashSet object will be instantiated and called as such:
     obj = MyHashSet.new()
    p obj.add(14)
    p obj.add(18)
    
    p obj.set
    p obj.contains(2)
    # param_3 = obj.contains(key)