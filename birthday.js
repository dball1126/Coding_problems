let d = 4;
let m = 1;
let s = [4];

function birthday(s, d, m) {
    let count = 0;
    let arr = [];
    let reducer = (acc, val) => acc + val;
    if (s.length === 1 && s[0] === d && s.length === m) return 1

    for (let i = 0; i < s.length-1; i++) {
        let sum = [s[i]];
        for (let j = 1; j < s.length; j++) {
            if (sum.length === m && sum.reduce(reducer) === d && !arr.includes(sum)) {
                count++;
                arr.push(sum);
                break;
            } else if (!arr.includes(sum) && sum.length < m && sum.reduce(reducer) < d) {
                sum.push(s[j]);
            } else {
                break;
            }
        }

    }
    return count;
}




console.log(birthday(s, d, m))