function bitWise(num) {
    let zeros = 0;
    let ones = 0;
    let count = 0;
    while( num !== 0) {
        if (num & 1) {
            count++;
        }
       num = num >> 1;
    }
    return count % 2 !== 0 ? 1 : 0;
}

console.log(bitWise(333))