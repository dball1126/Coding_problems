// function fun(n) {
//     if (n === 1 )return 1
//     let sum = n;
    
//     return sum * fun(n-1)
// }

function funny(n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        count += n;
    }
    for (let j = 1; j < n; j = j * 2){
        count += j
    }
    return count;
}


console.log(funny(10))