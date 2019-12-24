class Node
    attr_accessor :key, :value, :next
    def initialize(key, value)
        self.key = key;
        self.value = value;
        self.next = nil;
    end
end

class MyHashSet

=begin
    Initialize your data structure here.
=end
    attr_accessor :set, :count

    def initialize()
        self.set = Array.new(1000, nil)
        self.count = 0
    end


=begin
    :type key: Integer
    :rtype: Void
=end
    def add(key)
        self.set.push(*Array.new(1000, nil)) if (self.count == self.set.length) 

        actualKey = key % self.set.length
        
        if self.contains(key)
            head = self.set[actualKey]
            
            while head.next != nil
                head = head.next
            end

            head.next = Node.new(actualKey, key)
        else

            self.set[actualKey] = Node.new(actualKey, key)
            self.count += 1

        end
        return nil
    end


=begin
    :type key: Integer
    :rtype: Void
=end
    def remove(key)
        actualKey = key % self.set.length
        if self.contains(key)
            head = self.set[actualKey]
            # if head.next == nil
            #     self.set[actualKey] = 00 
            # else
            #     head = self.set[actualKey]
            #     self.set[actualKey] = head.next
            # end
            self.set[actualKey] = nil

            self.count -= 1
        end
         return nil       
    end


=begin
    Returns true if this set contains the specified element
    :type key: Integer
    :rtype: Boolean
=end
    def contains(key)
        actualKey = key % self.set.length
       return false if self.set[actualKey] == nil
       return true if self.set[actualKey].value == key

       head = self.set[actualKey]
       node = head

       while node.next != nil
           node = node.next
            return true if node.value == key
       end

       return false
    end
end

# Your MyHashSet object will be instantiated and called as such:
obj = MyHashSet.new()
obj.add(2)
obj.add(2)
p obj.contains(2)
obj.remove(2)
p obj.contains(2)
