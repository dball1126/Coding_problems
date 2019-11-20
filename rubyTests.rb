def factorials_rec(num)
    
 return 1 if num == 1 || num == 2
 return 2 if num == 3
 arr = []
  
 answer = num * factorials_rec(num-1) 
 arr.push(answer)
  return arr
end

puts factorials_rec(5)