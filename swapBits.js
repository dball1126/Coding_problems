function swap(num, index1, index2){

}

console.log(swap(10, 0, 3))


function convertBinary(number) {
    var binaryArr = [];
    for (; number; number >>= 1) {
        binaryArr.push(number & 1);
    }
    return binaryArr.reverse().join('');
}

console.log(convertBinary(10))