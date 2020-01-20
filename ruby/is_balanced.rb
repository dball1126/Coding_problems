def is_balanced(root)
   return true if (root.nil?)
   left = get_height(root.left)
   right = get_height(root.right)
   min = [left, right].min
   max = [left, right].max
   
   return (max - min <= 1) && is_balanced(root.left) && is_balanced(root.right)
end

def get_height(root)
    return -1 if root.nil?
    return [get_height(root.left) + 1, get_height(root.right) + 1].max
end

class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end