/**
 * @param {number[]} nums
 * @return {number}
 https://leetcode.com/problems/minimum-moves-to-equal-array-elements/
 */

function equalityChecker (array) {
    
     for(let i = 1; i<array.length; i++) {
            if (array[i-1]!==array[i]) return false;
        }
        return true;
    
}
   /* function likeTerms (array) {
        let newArr = [array[0]];
        let max = Math.max(...array);
        for(let i in array) {
            if(array[i]===max) newArr.push(array[i]);
            else if(array[i]!==newArr[newArr.length-1]) newArr.push(array[i]);


        }

        return newArr;

    }
    */
    var minMoves = function(nums) {
   
        let count = 0;
        if(equalityChecker(nums)) return count;
        nums = nums.sort((a,b)=>a-b);
        
        while (count<Math.pow(2,31)-1){
            
            if(count>0&&equalityChecker(nums)) return count;
            
            
            
            let maxDiff = nums[nums.length-1] - nums[0];
            
            nums = nums.map((curr, index, arr)=>{
                
                if(index!==arr.length-1) return curr + maxDiff;
                else return curr;
                
            });
            
            nums.unshift(nums.pop());
            
            count += maxDiff;
            
        }
    
};

/*
var minMoves = function(nums) {
    //1. check existing equality
    var equality = (()=>{
        for(let i = 1; i<nums.length; i++) {
            if (nums[i-1]!==nums[i]) return false;
        }
        return true;
    })()
    
    if(equality) return 0;
    else {
        let sortedDifferences = nums.sort((a,b)=>a-b)
        .map((currVal, index, array) =>                                     {return array[array.length-1] - currVal});
        console.log(sortedDifferences);
        let sumDiff = sortedDifferences.reduce((a,b)=> {
            return a+b;
        }, sortedDifferences.length-2);
        return sumDiff;
    
    }
    

    

};*/
