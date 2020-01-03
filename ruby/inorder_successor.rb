def inorder_successor(root, p)
    return nil if root.nil?
    queue = [ root ]
    min = Float::INFINITY
    max = nil
    while queue.length > 0
        node = queue.shift
        
        if node.val > p
            min = [min, node.val].min
        end
        
        if node.val == p
            max = node.val
            break
        end
        
        queue.push(node.left) if !node.left.nil?
        queue.push(node.right) if !node.right.nil?
    end
    
    return min if min != Float::INFINITY && max != nil
    return nil
end

class Node
    attr_accessor :val, :left, :right
    def initialize(val)
        self.val = val;
        self.left = self.right = nil
    end
end

 node1 = Node.new(2)
 node2 = Node.new(1)
 node3 = Node.new(3)
#  node4 = Node.new(2)
#  node5 = Node.new(4)
#  node6 = Node.new(1)
 
 node1.left = node2
 node1.right = node3
#  node2.left = node4
#  node2.right = node5
#  node4.left = node6

p inorder_successor(node1, 1)