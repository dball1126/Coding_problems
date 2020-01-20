def rotate(matrix)

  
    (0...matrix.length).each do |c|
      (c...matrix[0].length).each do |r|
          
          matrix[c][r], matrix[r][c] = matrix[r][c], matrix[c][r]
  
        end
        matrix[c] = matrix[c].reverse
    end
    
   return matrix
end

p rotate([
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ])