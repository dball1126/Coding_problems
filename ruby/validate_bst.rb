
def is_valid_bst(root, lower = nil, higher = nil)
    
end

class Node
    attr_accessor :val, :left, :right
    def initialize(val)
        self.val = val;
        self.left = self.right = nil
    end
end

 node1 = Node.new(10)
 node2 = Node.new(5)
 node3 = Node.new(15)
 node4 = Node.new(6)
 node5 = Node.new(20)
 
 node1.left = node2
 node1.right = node3


 p is_valid_bst(node1)