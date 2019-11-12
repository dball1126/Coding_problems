function getMinimumUniqueSum(arr) {
    // Write your code here
    let vals = new Set();
    const reducer = (acc, val) => acc + val;
    for (let i = 0; i < arr.length; i++) {
        if (!vals.has(arr[i])) {
            vals.add(arr[i]);
        } else if (vals.has(arr[i])) {
            
            let n = 1;
            while (n < Infinity) {
                    if (!vals.has(n)) {
                        vals.add(n)
                        break
                    }
               n++
            }
        }
        
    }
    return [...vals.values()].reduce(reducer);
}

console.log(getMinimumUniqueSum([3,1,2,2]))