# Definition for a binary tree node.
class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end


def inorder_traversal(root)
  return [] if !root
  inorder = []

  stack = [root]

 
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

p inorder_traversal(node1)