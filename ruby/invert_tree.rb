def invert_tree(root)
    return if root.nil?

    temp = root.left
    root.left = root.right
    root.right = temp

    invert_tree(root.left)
    invert_tree(root.right)
    return root
end


class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end

node1 = TreeNode.new(4)
node2 = TreeNode.new(2)
node3 = TreeNode.new(7)
node4 = TreeNode.new(1)
node5 = TreeNode.new(3)
node6 = TreeNode.new(6)
node7 = TreeNode.new(9)


node1.left = node2
node1.right = node3

node2.left = node4
node2.right = node5
node3.left = node6
node3.right = node7


p invert_tree(node1)