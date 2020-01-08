def is_same_tree(p, q)
 
   queue = [p, q]

    while queue.length > 0
        t1 = queue.shift
        t2 = queue.shift

        return false if t1.val != t2.val

        return false if !t1.left.nil? && t2.left.nil?
        return false if t1.left.nil? && !t2.left.nil?

        return false if !t1.right.nil? && t2.right.nil?
        return false if t1.right.nil? && !t2.right.nil?

        queue.push(t1.left, t2.left) if !t1.left.nil?
        queue.push(t1.right, t2.right) if !t1.right.nil?
    end
    return true
end

class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end

node1 = TreeNode.new(1)
node2 = TreeNode.new(1)
node3 = TreeNode.new(2)
node4 = TreeNode.new(3)


node1.left = node3
node1.right = node4

node2.left = node3
node2.right = node4



p is_same_tree(node1, node2)