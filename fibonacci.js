function fastFib(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n === 1 || n === 2) return 1;

    memo[n] = fastFib(n - 1, memo) + fastFib(n - 2, memo);
    console.log(memo)
    return memo[n];
}

let cache = [1];
function fact(key) {
    if (!cache[key]) {
        cache[key] = key * fact(key - 1)
    } else { // just to demo cache:
        console.log("cache hit:", key)
    }
    console.log(cache)
    return cache[key]
}
//5* 4 * 3 * 2 * 1
// console.log(fastFib(6))
console.log(fact(5))