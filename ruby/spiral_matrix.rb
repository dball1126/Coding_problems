def spiral_order(matrix)

    visited, arr, c, r, cc, rr = {}, [], 0, 0, matrix.length, matrix[0].length
    i = 0
    while i < (cc * rr)
             if !visited.has_key?([c, r])
                arr.push(matrix[c][r])
                visited[[c, r]] = [c, r]
             end

            if c >= 0 && c < cc && r >= 0 && r+1 < rr && !visited.has_key?([c, r+1]) #RIGHT
                r += 1
            elsif c >= 0 && c+1 < cc && r >= 0 && r < rr && !visited.has_key?([c+1, r]) #DOWN
                c += 1
            elsif c >= 0 && c < cc && r-1 >= 0 && r < rr && !visited.has_key?([c, r-1]) # LEFT
                r -= 1
            elsif c-1 >= 0 && c < cc && r >= 0 && r < rr && !visited.has_key?([c-1, r]) # UP
                c -= 1
            end
        i += 1
    end
    return arr
end


p spiral_order([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
   ])