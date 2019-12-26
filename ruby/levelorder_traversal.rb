# Definition for a binary tree node.
class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end


def level_order(root)
  return [] if !root
  levelorder = []
  queue = [root]
  sub = []
  new_queue = []
  while !queue.empty?
    node = queue.shift
    sub.push(node.val)
    new_queue.push(node.left) if node.left
    new_queue.push(node.right) if node.right
    if queue.empty?
        queue = new_queue
        levelorder.push(sub)
        sub = []
    end
  end

    return levelorder
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

p level_order(node1)