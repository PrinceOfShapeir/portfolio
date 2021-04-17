/**
 * @param {number[]} nums
 * @return {number[]}
 */

//radix sort using loops, an O(n*k) solution where k = max length

var sortArray = function (nums) {
    
    //get maximum number length
    
    let max = (()=>{
        
        let biggest = 0;
        
        for(let i of nums) {
            
            //convert negatives to positive to check length
            if(i<0) {
                if(i*-1>biggest) biggest = i*-1;
                console.log(i + " * -1 = " + i*-1);
            }
            else if(i>biggest) biggest = i;
            
            
        }
        return biggest.toString().length;
        
    })()
    
    //doubling the bucket size to account for negative numbers
    
    let buckets = new Array(20).fill([]);
    
    
    let newNums = [...nums];
    
    for(let i = 0;i<max;i++){ //iterate max times
        
        for(let j = 0, place = 0; j<newNums.length; j++){
            
            //place corresponds to a number line where 0 = 10th index
            place = Math.floor(newNums[j]/Math.pow(10,i)%10);
            
            //add 10 to everything except when there's a negative zero place.
            //otherwise negative tens go after other negative numbers instead of before
            place += (place===0&&newNums[j]<0) ? 0 : 10;
                
            
            //console.log(place);
            buckets[place] = [...buckets[place], newNums[j]];
                
            
            
        }
        //need to use concat as spreading to empty array does not flatten
        //this method won't work when n>500,000
        newNums = [].concat(...buckets);
        if(i+1<max) buckets.fill([]);//check for end of loop
        
    }
    
    return newNums;
    
}




/*
recursive bubble sort (exceeds time limit)
var sortArray = function(nums) {
    
    
    function sorter(array){
        let changes = 0;
        for(let i = 1; i<array.length; i++) {
            
            if(array[i]<array[i-1]) {
                [array[i], array[i-1]] = [array[i-1], array[i]];
                changes++;
            }
            
        }
        
        if(changes===0) return array;
        else return sorter(array);
        
        
    }
    
    return sorter(nums);
    
};*/

/*
bubble sort using looping, also times out, leetcode dislikes bubble sort :(
var sortArray = function(nums) {
    
    let array = nums.slice();
    let changes = 1;
    while (changes>0) {
        changes = 0;
        for(let i = 1; i<array.length; i++) {
            
            if(array[i]<array[i-1]) {
                [array[i], array[i-1]] = [array[i-1], array[i]];
                changes++;
            }
            
        }  
       
    }
    
    return array;
    
    
    

    
};
*/
