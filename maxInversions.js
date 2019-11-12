// output the inversions of prices where sub arrays are at least 3 in length and i > g > j && j < g < i
function maxInversions(prices) {
    let subs = [];
    for (let i = 0; i < prices.length; i++) {
        for (let j = i+1; j < prices.length+1; j++) {
            subs.push(prices.slice(i, j))
            
        }
        
    }
    let arr = subs.filter(e => {
        let truthy = e.length === 3;
     for (let i = 0; i < e.length-2; i++) {
        if (e[i+1] > e[i]) return false
     } 
       return truthy
    })
    console.log(arr)
}

console.log(maxInversions([5,4,3,2,1]))