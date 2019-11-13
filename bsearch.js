function bsearch(nums, target){
    if (!nums.length) return -1;

    let mid = Math.floor(nums.length / 2);
    let l = nums.slice(0, mid);
    let r = nums.slice(mid+1, nums.length);

    if (nums[mid] === target) {
        return mid;
    } else if (nums[mid] > target) {
        return bsearch(l, target);
    } else {
        let righty = bsearch(r, target)
        if (righty === -1) return -1
        return (righty + (mid + 1))
    }

}


console.log(bsearch([1,2,3,4,5,6], 1))