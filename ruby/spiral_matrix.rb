def spiral_order(matrix)
    order, i, j, c, r = {}, matrix.length * matrix[0].length, 0, 0, 0

    while j < i
        ele = matrix[c][r]
        order[[c, r]] = ele
        if matrix[c][r+1] != nil && !order.has_key?([c,r + 1])
            r += 1
        elsif c+1 < matrix.length && !order.has_key?([c + 1,r])
            
            c += 1
        elsif matrix[c][r - 1] != nil && !order.has_key?([c,r - 1])
            r -= 1
        elsif c-1 >= 0 && !order.has_key?([c - 1,r])
            c -= 1
        end

        j += 1
    end
    return order.values
end


p spiral_order([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
   ])