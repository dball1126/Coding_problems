def count_primes(n)
    return 0 if n <= 2
    i = 2
    count = 0

    until n < 100
        n /= 10
    end

    while i < n
        count += 1 if is_prime(i)
        i += 1
    end
    return count
end

def is_prime(num)
     i = 2



    while i < num
        return false if num % i == 0
        i += 1
    end
return true
end

p count_primes(499979)