def set_zeroes(matrix)
   positions = []
   (0...matrix.length).each do |i|
        (0...matrix[i].length).each do |j|
            positions.push([i, j]) if matrix[i][j] == 0
            
        end
    end
    
    positions.each do |ele|
        (0...matrix.length).each do |i|
            (0...matrix[i].length).each do |j|
                c = ele.first
                r = ele.last
                matrix[i][j] = 0 if c == i
                matrix[i][j] = 0 if r == j
                    
            end
        end
    end
    return matrix
end

p set_zeroes([
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
  ])