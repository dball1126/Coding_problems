let arr = [-4, 3, -9, 0, 4, 1 ];
function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zero++;
        } else if (arr[i] > 0) {
            positive++;
        } else {
            negative++;
        } 
    }
    console.log(positive / arr.length)
    console.log(negative / arr.length)
    console.log(zero / arr.length)

}

function staircase(n) {
    
    for (let i = 1; i <= n; i++) {
        str = ""    
        for (let j = 0; j < i; j++) {
            
            
        }
    }

}
