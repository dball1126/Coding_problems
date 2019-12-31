def reverse_list(head)
   return head if head.next == nil

    new_head = TreeNode.new(head.val)
    new_head.next = nil
    current = head.next

    while current != nil

        node = TreeNode.new(current.val)
        node.next = new_head
        new_head = node
        current = current.next
        
    end
   
    return new_head
end


class TreeNode
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end

node1 = TreeNode.new(1)
node2 = TreeNode.new(2)
node3 = TreeNode.new(3)
node4 = TreeNode.new(4)
node5 = TreeNode.new(5)
node6 = TreeNode.new(6)
node7 = TreeNode.new(9)


node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

p reverse_list(node1)