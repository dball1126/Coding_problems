function lucasNum(n, cache = {}) {
    if ( n === 0) return 2;
    if ( n === 1 ) return 1;

    cache[n] = lucasNum(n-1, cache) + lucasNum(n-2, cache)
    return cache[n];
}
console.log(lucasNum(7))