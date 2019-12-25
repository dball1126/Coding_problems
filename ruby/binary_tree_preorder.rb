# Definition for a binary tree node.
class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end


def preorder_traversal(root)
    return [] if !root
    order = []
    stack = [root]

    while stack.length > 0
        node = stack.pop
        order.push(node.val) if node.val
        stack.push(node.right) if node.right
        stack.push(node.left) if node.left
        p stack
    end
    return order
end


node1 = TreeNode.new(1)
node2 = TreeNode.new(4)
node3 = TreeNode.new(3)
node4 = TreeNode.new(2)

node1.left = node2
node1.right = node3
node2.left = node4

p preorder_traversal(node1)