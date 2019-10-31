function reverseStr(str){
    let realLength = str.length -1;
    let length = Math.floor(str.length / 2);
    let arr = str.split("");
    for (let i = 0; i < str.length; i++) {
        let first = str[i];
        let last = str[realLength];

        if (!isLetter(first)) {
            
            continue;
        } else if (!isLetter(last)){
            realLength--;
        
        } else if (isLetter(first) && isLetter(last) && i < realLength){
            [arr[i], arr[realLength]] = [arr[realLength], arr[i]];
            realLength--;
        }   
    }
    return arr.join("")
}

function isLetter(letter){
    let val = letter.charCodeAt(0);
    if(val >= 65 && val <= 90) return true;
    if (val >= 97 && val <= 122) return true;
    return false;
}

console.log(reverseStr("a-bC-dEf-ghIj"))