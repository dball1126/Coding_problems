def max_path_sum(node, max = 0)
    return 0 if node.nil?
    return node.val if node.left.nil? && node.right.nil?

    max = [max, node.val + max_path_sum(node.left) + max_path_sum(node.right)].max
    max = [max, max_path_sum(node.left)].max
    max = [max, max_path_sum(node.right)].max

    return max
end

class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end

node1 = TreeNode.new(-10)
node2 = TreeNode.new(9)
node3 = TreeNode.new(20)
node4 = TreeNode.new(15)
node5 = TreeNode.new(7)


node1.left = node2
node1.right = node3

node3.left = node4
node3.right = node5


p max_path_sum(node1)