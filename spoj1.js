const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function spoj1(nums){
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 42) break
        console.log(nums[i])
        
    }
}

console.log(spoj1([1,2,88,42,99]))