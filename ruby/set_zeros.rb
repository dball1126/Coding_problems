def set_zeroes(matrix)
    (0...matrix.length).each do |i|
        (0...matrix.length).each do |j|
            if matrix[i][j] == 0
              colHash = [i]
              rowHash = [j]
              
                (0...matrix.length).each do |f|
                    (0...matrix.length).each do |g|
                        if matrix[f][g] == 0
                            colHash.push(f)
                            rowHash.push(g)
                        end
                        
                        if colHash.include?(f)
                            matrix[f][g] = 0
                        end 

                        if rowHash.include?(g)
                            matrix[f][g] = 0
                        end

                    end
                end
                return matrix
            end
        end
    end
    
end

p set_zeroes([
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
  ])