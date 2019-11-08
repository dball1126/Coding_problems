var containsDuplicate = function (nums) {
    let dups = new Map();
    for (let e = 0; e < nums.length; e++) {
        if (dups.has(nums[e])) {
            return true;

        } else {
            dups.set(nums[e], 1);
        }
    };
    return false;
};


console.log(containsDuplicate([1,2,3,1]))