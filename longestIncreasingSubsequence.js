/*
The longest increasing subsequence is [2,3,7,101], therefore the length is 4.


*/


var lengthOfLIS = function (nums) {
    let sequences = [];
    let prev = nums[0];
    if (!nums.length) return 0;
    if (nums.length === 2 && nums[1] > nums[2]) return 2;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < prev) {
            prev = nums[i]
            continue;
        } else if (nums[i] > prev){
            let sequence = [prev];
            for (let j = i; j < nums.length; j++) {
                sequence.push(nums[j])
                let length = sequence.length;
                if (sequence[length-2] > sequence[length-1]) {
                    let val = sequence.pop();
                    sequence.pop();
                    sequence.push(val);
                }
            }
            sequences.push(sequence)
        }

    }
    if (!sequences.length) return 1;
    return Math.max(...sequences.map(e => e.length))
};

console.log(lengthOfLIS([10,100]))