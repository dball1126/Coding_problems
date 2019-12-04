def is_same_tree(p, q)
    return true if !p && !q
  return false if !p || !q
    return false if p.nil? || q.nil?

    queue = [p, q]

    while !queue.empty?
        n1 = queue.shift
        n2 = queue.shift

        return false if n1.val != n2.val

        if (n1.left.nil? && n2.left != nil) || (n1.left != nil && n2.left.nil?) || (n1.right.nil? && n2.right != nil) || (n1.right != nil && n2.right.nil?)
            return false
        end
        
        if !n1.left.nil? && !n2.left.nil?
            queue << n1.left
            queue << n2.left
        end

        if !n1.right.nil? && !n2.right.nil?
            queue << n1.right
            queue << n2.right
        end
    end

    true
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