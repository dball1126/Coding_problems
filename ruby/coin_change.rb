def coin_change(coins, amount, count = 0)
    return Float::INFINITY if amount < 0
    return count if amount == 0
    min = Float::INFINITY


    for c in coins
        next if c == 0

        if amount - c >= 0
            amount -= c
            count += 1
        end

        if amount == 0
            min = [min, count].min
        end

        min = [coin_change(coins, amount, count), min].min

    end

    min == Float::INFINITY ? -1 : min
end


p coin_change(coins = [1, 2, 5], amount = 11)