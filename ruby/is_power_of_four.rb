def is_power_of_four(num)
    return false if num > 4294967296
    return true if num == 1
    four = 1
    while four < num
        four *= 4
    end
    four == num ? true : false
end


p is_power_of_four(40)