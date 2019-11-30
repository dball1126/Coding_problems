def coin_change(coins, amount, arr = [], visited = [], counter = -1)

    def help(coins, amount, arr, visited, counter)
   return [] if visited.include?(arr) || arr.sum > amount
   return arr if arr.sum == amount
    coins.each do |i|
        if !visited.include?(arr)
            result = coin_change(coins, amount, [*arr, i], visited, counter)
            if result.count != 0
                if visited.count == 0
                    visited.push(result) 
                elsif result.count < visited.first.count
                    counter = result.count
                    visited.pop
                    visited.push(result)
                   
                end
            end
        end
    end
    end

    result = help(coins, amount, arr, visited, counter)
    p counter
    return result
end


p coin_change(coins = [1, 2, 5], amount = 11)