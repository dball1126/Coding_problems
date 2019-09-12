let a = [2, 6];
let b = [ 24, 36];

function getTotalX(a, b) {
    // Write your code here
    let count = 0;
    let maxA = Math.max(...a);
    let maxB = Math.min(...b);
    
    for (let i = 1; i < 100; i++) {
        let truthy = true;
        for (let j = 0; j < a.length && j < b.length; j++) {
            if (a[j] === undefined || b[j] === undefined) break;
            if (i % a[j] !== 0 || b[j] % i !== 0) {
                truthy = false;
                break
            }
            
        }
        if (truthy) count++;
    }
    return count;
}

console.log(getTotalX(a, b))