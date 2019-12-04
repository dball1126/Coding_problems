def max_depth(root)
    return 0 if root == nil

    max = 0
    left = max_depth(root.left) + 1
    right = max_depth(root.right) + 1

    max = [left, right].max

    return max
end


class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end

node1 = TreeNode.new(3)
node2 = TreeNode.new(9)
node3 = TreeNode.new(20)
node4 = TreeNode.new(15)
node5 = TreeNode.new(7)


node1.left = node2
node1.right = node3

node3.left = node4
node3.right = node5

p max_depth(node1)