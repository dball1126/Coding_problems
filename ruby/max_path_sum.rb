def max_path_sum(root, sums = [])
    return root.val if root.left.nil? && root.right.nil?

    if root.left && root.right
        if !root.left.left.nil? || !root.right.right.nil?
            sums.push(root.val + root.left.val + root.right.val)
        end
    end
    
    sums.push(max_path_sum(root.right, sums) + root.val + max_path_sum(root.left, sums))
    return sums.max
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