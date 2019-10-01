//   arr = [0,1,2,3,4]          arr[0] ===  0    arr[1] = 1    arr[2] = 2

// arr = [,5,6,7,8]    a[0] === 0

// arr[i] = i;

// function magicIndex(arr) {

//     let answer = null;
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === i) {
//             return i
//         }
//     }
    
//     return answer
// }

function magicIndex(arr) {
    let start = 0;
    let end = arr.length-1
    let array = arr;

    function helper(array, start, end){
        if(end < start) return -1;
        if (end === start) return;
        let mid = Math.floor((start + end) /2);
    
        if(array[mid] === mid) {
            return mid;
        }

        let arrayMid = array[mid];
        let leftIndex = Math.min(mid-1, arrayMid);

        let left = helper(array, start, leftIndex);
        if (left >= 0) return left;

        let rightIndex = Math.max(mid+1, arrayMid);
        let right = helper(array, rightIndex, end);

        return right;

    }
    let answer = helper(array, start, end)
    return answer;
}



console.log(magicIndex([15,-5,1,1,1,3,6,7,9,12,13]))
