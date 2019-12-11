def rotate(matrix)
  (0...matrix[0].length).each do |r|
    (0...matrix.length).each do |c|
        
        matrix[c][r],  matrix[r][c] = matrix[r][c], matrix[c][r]
       
      end
      
    end
    # (0...matrix.length).each do |i|
    #   matrix[i] = matrix[i].reverse
    # end
    return matrix
end

p rotate([
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ])