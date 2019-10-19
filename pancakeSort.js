let a = [3,2,4,1];

const pancakeSort = (A) => {
    let arr = [];
    let max = Math.max(...A);
    let count = 0;
    let masterCount = 0;

    for (let i = 1; i < A.length; i++) {
        let ele = A[i-1];
        if (ele >= A[i]) arr = [0]
    }

    if (arr === [0]) {
        return [];
    } else {
        arr = []
    }

    while (A.length) {
        let ele = A.shift();
        count++;
        if (max === ele) {
            arr.unshift(ele);
            masterCount++;
        } else {
            A.push(ele);
        }
        if (count === A.length || count === A.length-1) {
            max = Math.max(...A);
            count = 0;
        }
    }
    return arr;
}


function flipper(A){
    let arr = [];
    while(arr.length !== A.length){

        for (let i = 0; i < A.length; i++) {
            let ele = Math.max(...A);
            arr.push(ele);
            [...A]
        }

    }
    
}

console.log(pancakeSort(a))