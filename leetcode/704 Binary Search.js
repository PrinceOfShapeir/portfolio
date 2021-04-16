/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//this is a binary search using recursion that preserves the index
//a lot of other implementations track this using min and max, but this is unnecessary, 
//you only need to add to the accumulated index when moving to the right of the midpoint

var search = function(nums, target, cumulativeIndex = 0) {
    
    let middle = Math.floor((nums.length-1)/2);

    if(nums[middle]===target) return middle + cumulativeIndex;
    else if (nums[middle]>target&&nums.length>=2) {
        console.log("lower");
        return search(nums.splice(0,middle), target, cumulativeIndex);
    }
    else if (nums[middle]<target&&nums.length>=2) {
        console.log("greater");
        return search(nums.splice(middle+1, nums.length-middle+1), target, cumulativeIndex + middle + 1);
    }
        
    else return -1;
 
};

