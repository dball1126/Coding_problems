let a = [2, 6];
let b = [ 24, 36];

function betweeen(a, b) {
    // Write your code here
   let results = 0;

   for (let u = Math.max(...a); u <= Math.min(...b); u++) {
       
    if (is_fact(u, a) && isFactor(u, b)){
        results++;
    }
       
   }
   return results;
}

function isFactor(n, arr2){
    let truthy = true;
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] % n !== 0) {
            return false;
        }

    }
    return truthy;
}

function is_fact(n, arr1){
    let truthy = true;
    for (let i = 0; i < arr1.length; i++) {
        if (n % arr1[i] !== 0){
            return false;
        } 
        
    }

   return truthy;
    }

console.log(isFactor(9, [9,18]))

console.log(betweeen(a, b))