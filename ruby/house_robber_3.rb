def rob(root)
    return 0 if !root
    return root.val if !root.left && !root.right
    order = []
    queue = [root]

    while (queue.length != 0)
        node = queue.shift
        order.push(node.val)
        queue.push(node.left) if node.left
        queue.push(node.right) if node.right
    end
   
    order[1] = [order[0], order[1]].max
    i = 2
    while i < order.length
        order[i] = [order[i] + order[i-2], order[i-1]].max
        i += 1
    end
    return order.last
end

class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end

node1 = TreeNode.new(3)
node2 = TreeNode.new(2)
node3 = TreeNode.new(3)
node4 = TreeNode.new(3)
node5 = TreeNode.new(1)

node1.left = node2
node1.right = node3
node2.right = node4
node2.left = node5
node3.right = node5

p rob(node1)