def count_primes(n)
  count = 0;
  first_h = 0;
  rest = n % 100;

  if n < 100
    (0...n).each do |i|
        count += 1 if is_prime(i)
    end
    return count;
  end

  if n > 100
    (0...100).each do |i|
        first_h += 1 if is_prime(i)
    end

    (n-rest...n).each do |i|
        count += 1 if is_prime(i)
    end
  end
  count += (first_h * (n/100))
  return count;
end

def is_prime(num)
    return false if num <= 1
    return true if num == 2
     i = 2
    while i < num
        return false if num % i == 0
        i += 1
    end
return true
end

p count_primes(499979)
#