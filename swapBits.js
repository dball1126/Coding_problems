function swap(num, index1, index2){
    // let number = convertBinary(num).split('');
    // console.log(number);
    // [number[index1], number[index2]] = [number[index2], number[index1]];
    // console.log(number);
    // return parseInt(number.join(''), 2);

    if (((num >> index1) & 1) !== ((num >> index2) & 1)){
        console.log("ASDFASD") 
        let bitMask = (1 << index1) | (1 << index2);
         
         num ^= bitMask  

    }
    
    return num;
}

function convertBinary(number) {
    var binaryArr = [];
    for (; number; number >>= 1) {
        binaryArr.push(number & 1);
    }
    return binaryArr.reverse().join('');
}




console.log(swap(10, 1, 2))