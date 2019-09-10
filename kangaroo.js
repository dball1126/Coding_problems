let x1 = 0;
let v1 = 3;
let x2 = 4;
let v2 = 2;
function kangaroo(x1, v1, x2, v2) {
    let answer = "NO";
    let left = x1+v1;
    let right = x2+v2;
    let counter = 0;
    while (left < right && counter < 10000) {
        if (left === right) {
            return "YES";
        } else if (left < right && v2 > v1) {
            return "NO"
        } else {
            left+=v1;
            right+=v2;
            counter++;
            
        }
    }

    return left === right ? "YES" : "NO"
}

console.log(kangaroo(x1,v1,x2,v2))