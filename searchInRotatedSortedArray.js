var search = function (nums, target, l, r, mid) {
    nums.sort()
    if (mid < 0 || mid > nums.length-1) return -1;

     mid = Math.floor(nums.length / 2);
     l = nums.slice(0, mid);
     r = nums.slice(mid+1, nums.length)
    
   
        if (nums[mid] === target) {
            return mid;
        } else if (target > nums[mid]) {
             search(nums, target, l, r, mid)
        } else {
            let right = search(nums, target, l, r, mid) 
            if (right === -1) return -1;
            return (right) + mid + 1
        }
    

    
};

console.log(search(nums = [4, 5, 6, 7, 0, 1, 2], target = 6))