 function hIndex(arr) {
    let vals = {};
    let sum = 0;
    let actualKey;
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if(!vals[value]) {
            vals[value] = 1;
        } else if (vals[value]) {
            vals[value]++;
        }  
    }
    let keys = Object.keys(vals);
    
    for (let j = 0; j < keys.length; j++) {
        let d = parseInt(keys[j])
        let temp = 0;
        
        for (let i = 0; i < vals[keys[j]]; i++) {
            temp += d
        }

        if (sum < temp) {
            sum = temp;
            actualKey = d;
        }
    }

    console.log(actualKey)
 }

 console.log(hIndex([1,4,1,4,2,1,3,5,6]))