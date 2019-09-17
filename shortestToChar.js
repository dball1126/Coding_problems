var shortestToChar = function (S, C) {
    let arr = S.split("");
    let results = [];
    
    
    for (let i = 0; i < arr.length; i++) {

        for (let j = i; j < arr.length; j++) {
            let char = arr[j];
            
            
                if (char === C) {
                    results.push(j-i);
                    break;
                }

            
        }
    }
    return results;
};
let S = "loveleetcode"
let C = 'e'
//  [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

console.log(shortestToChar(S, C))