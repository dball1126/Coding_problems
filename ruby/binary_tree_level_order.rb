class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end

def level_order(root)
  return [] if root.nil?
  queue = [ root ]
  level = []
  order = []
  children = []

  while queue.length > 0
    node = queue.shift
    level.push(node.val)

    children.push(node.left) if !node.left.nil?
    children.push(node.right) if !node.right.nil?

        if queue.empty?
            order.push(level)
            level = []

            if children.length > 0
                queue.push(*children)
                children = []
            end
        end
    end

    return order

end