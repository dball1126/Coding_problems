var uncommonFromSentences = function (A, B) {
    A = A.split(" ").concat(B.split(" "))
    let map = new Map();
    // console.log(A)
    let words = [];
    while (A.length) {
        let ele = A.pop();
        // console.log(!A.includes(ele))
        if (!A.includes(ele) && !map.has(ele)) {
            words.push(ele);
        } else {
            map.set(ele, ele);
        }
    }
    return words;
};
let A = "this apple is sweet";
let B = "this apple is sour";
console.log(uncommonFromSentences(A, B))