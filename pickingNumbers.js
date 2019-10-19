let arr = [4 ,6 ,5 ,3 ,3 ,1];
// 5


const pickingNumbers = (arr) => {
    let subs = [];
    let max = 0;
    
    for (let i = 0; i < arr.length-1; i++) {
        
        let ele = arr[i];
        let sub = [ele];
            
        for (let u = 0; u < arr.length && 1 !== u; u++) {
            if (Math.abs(arr[u] - ele) <= 1 && Math.abs(arr[u] - sub[sub.length-1]) <= 1) {
                sub.push(arr[u])           
            }
        }
        subs.push(sub)
        if (sub.length > max){
            max = sub.length
        } 
    }
    
    console.log(subs)
    return max;
}
console.log(pickingNumbers(arr))