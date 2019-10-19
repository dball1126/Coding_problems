function reverse(num) {
    let maskSize = 16;
    let bitMask = 0xFFFF;
    let arr = [];

    return arr[(num & bitMask)] << (3 * maskSize) | arr[(num >> maskSize) & bitMask] << (2 * maskSize) | arr[(num >> (2 * maskSize)) & bitMask] << maskSize | arr[(num >> (3 * maskSize)) & bitMask]  
}


console.log(reverse(10000))