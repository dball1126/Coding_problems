
function multiply(num1, num2, sum = 0) {
    if (num1 === 0) {
        return sum;
    } else {
        sum += num2
    }
    return multiply(num1-1, num2, sum)
    
}


console.log(multiply(11, 10))