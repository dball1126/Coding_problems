/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    return this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    let length = this.nums.length-1;
    for (let i = 0; i < this.nums.length; i++) {
        let rand = Math.ceil(Math.random(length) * Math.floor(length));
        let other;
        if (rand === 0) {
            other = 1;
        } else if (rand === length) {
            other = length-1
        } else {
            other = rand-1;
        }
        [this.nums[other], this.nums[rand-1]] = [this.nums[rand-1], this.nums[other]];
    }
    return this.nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
const nums = [1,2,3];

var obj = new Solution(nums);
console.log(obj);
var param_1 = obj.shuffle()