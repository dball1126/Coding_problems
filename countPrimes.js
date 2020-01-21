var countPrimes = function (n) {
  if (n < 2) return 0;
  let primes = 0;

  let newArr = new Array(n).fill(false);
  let filler = 2;

  while (filler < newArr.length){
    newArr[n] = true;
    filler += 2;
  }

  for (let i = 3; i < newArr.length; i++) {
    if (newArr[i]) {
      primes += 1
    } else {
      primes += isPrime(i)
    }
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

console.log(countPrimes(100000) )