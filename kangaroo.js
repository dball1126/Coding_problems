let x1 = 28;
let v1 = 8;
let x2 = 96;
let v2 = 2;
function kangaroo(x1, v1, x2, v2) {
    let answer;
    let left = x1+v1;
    let right = x2+v2;
    if((x1+v1) === (x2+v2)){
        answer = "YES"
    } else if (v2 > v1) {
        answer = "NO"
    } else {
        let max = Math.max(left, right);
        let min = Math.min(left, right);
        let result = max % min;

        if (result % 2 === 0) {
            answer = "YES"
        } else {
            answer = "NO"
        }
    }
    return answer;
}

console.log(kangaroo(x1,v1,x2,v2))