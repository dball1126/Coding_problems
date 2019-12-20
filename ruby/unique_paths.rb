def unique_paths(m, n)
    return 1 if m  == 1 || n == 1
 
    arr = Array.new(n+1){Array.new(m+1, 1)}
    arr[n-1][m-1] = "finish"
 
    (1..n).each do |c|
     (1..m).each do |r|
         ele1 = arr[c-1][r]
         ele2 = arr[c][r-1]
 
         arr[c][r] = ele1 + ele2
     end
 end
     return arr[n-1][m-1]
 end


p unique_paths(7, 3)