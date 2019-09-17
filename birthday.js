let d = 3;
let m = 2;
let s = [1,2,1,3,2];

function birthday(s, d, m) {
    let count = 0;
    let map = new Map();
    for (let index = 0; index < s.length; index++) {
        let sum = 0
        
        for (let index2 = index; index2 > m; index2--) {
            
                sum += s[index2];
                
        }
        if (sum === d && !map.has("sum", sum)) {
            map.set("sum", sum);
            count++;
        }
    }
    return count;
}



// console.log(birthday(s, d, m))

let count = 0;
for (i = 0; i < 10; i++)
    for(j = 2; j < 10; j++)
console.log(count)