# Definition for a binary tree node.
class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end


def postorder_traversal(root)
  return [] if !root
  postorder = []
  stack = [root]
    while stack.length > 0
        node = stack.pop
        postorder.unshift(node.val)
        stack.push(node.left) if node.left != nil
        stack.push(node.right) if node.right != nil
    end
    return postorder
end


node1 = TreeNode.new(1)
node2 = TreeNode.new(2)
node3 = TreeNode.new(3)
node4 = TreeNode.new(4)
node5 = TreeNode.new(5)

node1.left = node2
node1.right = node3
node2.left = node4
node2.right = node5

p postorder_traversal(node1)