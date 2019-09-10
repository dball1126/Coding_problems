let arr = [1, 1, 2, 45, 46, 46] 
let target = 47;

function unitquePairs(arr, target) {
 let set = new Set(); 
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[i] + arr[j] === target && !set.has(`${arr[i]}${arr[j]}`)){
                set.add(`${arr[i]}${arr[j]}`)
                break
           }
        }      
    }
 return set.size;
}


console.log(unitquePairs(arr, target))