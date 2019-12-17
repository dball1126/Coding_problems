# Definition for singly-linked list.
class Node
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end

def merge_k_lists(lists)
   
end


list1 = Node.new(1)
list2 = Node.new(2)
list3 = Node.new(3)
list4 = Node.new(4)
list5 = Node.new(5)
list6 = Node.new(6)
list7 = Node.new(7)
list8 = Node.new(8)


list1.next = list2
list2.next = list3

list4.next = list5
list5.next = list6

list7.next = list8

p merge_k_lists([[list1], [list4], [list7]])

class MinHeap
    attr_accessor :array
    def initialize
        self.array = [nil]
    end

    def get_parent(idx)
        return idx / 2
    end

    def left_child_idx(idx)
        return idx * 2
    end

    def right_child_idx(idx)
        return idx * 2 + 1
    end

    def insert(val)
        self.array.push(val)
        self.siftUp(self.array.length-1)
    end

    def siftUp(idx)
        return if idx <= 1
        pIdx = self.get_parent(idx)

        if self.array[pIdx] > self.array[idx]
            array[pIdx], array[idx] = array[idx], array[pIdx]
            self.siftUp(pIdx)
        end
    end

    def deleteMin
        return nil if array.length == 1
        return array.pop if array.length == 2
        min = array[1]
        array[1] = array.pop

        self.siftDown(1)
        return min
    end

    def siftDown(idx)
        l = left_child_idx(idx)
        r = right_child_idx(idx)
        left = array[l]
        right = array[r]
        curr = array[idx]

        left = Float::INFINITY if left.nil?
        right = Float::INFINITY if right.nil?

       return if (curr < left && curr < right)

       swapIdx = nil

       if (left <= right)
        swapIdx = l
       else 
        swapIdx = r
       end
       
       array[swapIdx], array[idx] = array[idx], array[swapIdx]

       self.siftDown(swapIdx)

    end
end

h = MinHeap.new
h.insert(5)
h.insert(10)
h.insert(50)
h.insert(11)
h.insert(20)
h.insert(3)

p h.array