/**
 * @param {number} x
 * @return {number}
 https://leetcode.com/submissions/detail/481397492/
 */
var mySqrt = function(x) {
    
    //recursive implementation without arrays
    
    function rooter (square, higher = square, lower = 1) {
        
        if(higher-lower===0) return higher||lower;
        else if (higher-lower<=1) {
            if(higher*higher>square) return lower;
            else return higher;
        }
        
        let middle = Math.floor((higher-lower)/2) + lower;
        let squared = middle*middle;
        if(squared===square) return middle;
        else if (squared>square) return rooter(square, middle, lower);
        else if (squared<square) return rooter(square, higher, middle);
    }
    
    return rooter(x);
    
};


/* recursive implementation using arrays (blows stack for higher numbers)
var mySqrt = function(x) {
    
    let integers = [...Array(x).keys()];
    
    function rooter (array, square) {
        
        
        
        if(array.length===1) return array[0];
        
        else if(array.length<=2)  {
            if(array[1]*array[1]>square) return array[0];
            else return array[1];
        }
        else {
            
            let middle = Math.floor((array.length-1)/2);
            let squared = array[middle]*array[middle];
            if(squared===square) return array[middle];
            else if (squared>square) {
                return rooter(array.splice(0,middle), square);
            }
            else if(squared<square) {
                return rooter(array.splice(middle, array.length-middle), square)
            }
            
            
            
        }
        
    }
    
    return rooter(integers, x);
    
};
*/
