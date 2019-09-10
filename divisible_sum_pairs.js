let ar = [1,3,2,6,1,2]
let n = 6
let k = 3

function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for (let i = 0; i <= ar.length-1; i++) {
        let element1 = ar[i];
        for (let j = i-1; j >= 0; j--) {
            let element2 = ar[j];
            
            if((element1+element2) % k === 0) {
                
                count++
                
            }
        }
    }
    return count;
}
console.log(divisibleSumPairs(n, k, ar))