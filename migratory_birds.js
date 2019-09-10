let arr = [1,4,4,4,5,3];


function migratoryBirds(arr) {
    let bird = arr[0];
    let counter = 1;
    for (let i = 0; i <= arr.length-1; i++) {    // O(N)
        let count = 1;
        let eleOne = arr[i];
        for (let j = i-1; j >= 0; j--) {   // O(N-J)
            let eleTwo = arr[j];
            if (count === counter && eleOne < bird) {
                bird = eleOne;
                break
            } else if (eleOne === eleTwo) {
                count++;
                if (count > counter) {
                    bird = eleOne;
                    counter = count;
                }
            }
        }
    }
    return bird;
}

console.log(migratoryBirds(arr))