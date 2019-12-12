# Definition for singly-linked list.
class ListNode
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end

def merge_k_lists(lists)
    hash = Hash.new([])

    lists.each do |list|
        head = list
       
        while head.next != null
            hash[head.val].push(head)
            head = head.next
        end
    end

    newHead = null
    
    hash = hash.sort_by{|k, v| k}
    i = 0
    p hash
    hash.each {|k, v| 
        v.each {|node|
                if newHead == null 
                    newhead = node
                else
                    newHead.next = node
                end
                }
            }
            newHead
end


list1 = ListNode.new(1)
list2 = ListNode.new(2)
list3 = ListNode.new(3)
list4 = ListNode.new(4)
list5 = ListNode.new(5)
list6 = ListNode.new(6)
list7 = ListNode.new(7)
list8 = ListNode.new(8)


list1.next = list2
list2.next = list3

list4.next = list5
list5.next = list6

list7.next = list8

p merge_k_lists([[list1], [list4], [list7]])