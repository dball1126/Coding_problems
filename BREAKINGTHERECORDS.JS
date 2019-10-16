const scores = [10 ,5 ,20 ,20 ,4 ,5 ,2 ,25 ,1];

function breakingTheRecords(scores){
    let min = scores[0];
    let max = scores[0];
    let result = [0, 0];

    for (let i = 1; i < scores.length; i++) {
        let ele = scores[i];

        if (ele > max) {
            result[0]++;
            max = ele;
        } 
        if (ele < min) {
            result[1]++;
            min = ele;
        }
        
    }
    return result;
}

console.log(breakingTheRecords(scores));