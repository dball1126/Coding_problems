var countPrimes = function (n) {
  let primes = 0;
  for (let i = 0; i < n; i++) {
    primes += isPrime(i);
  }
  return primes;
};

const isPrime = (num) => {
    if (num < 2) return 0;
    if (num === 2) return 1;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return 0; 
    }
    return 1;
}

console.log(countPrimes(499979) )