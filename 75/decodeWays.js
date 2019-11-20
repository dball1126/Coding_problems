const numDecodings = (s) => {
    let str = s.split("").filter(e => parseInt(e) >= 1 && parseInt(e) <= 26).join("");
    if ( str.length === 0) return 0;
    if (str.length === 1) return 1;
    if (str.length === 2) return 2;
    let len = str.length;
    let fibs = [1, 2];
    for (let i = 2; i < len; i++){
        fibs[i] = fibs[i-2] + fibs[i-1];
    }
    return fibs[len-1];
}
console.log(parseInt("0"))
console.log(numDecodings("000"))