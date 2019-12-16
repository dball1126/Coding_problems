def add_to_array_form(a, k)
    (a.join("").to_i + k).to_s.split("").map(&:to_i)
end


p add_to_array_form(A = [1,2,0,0], K = 34)