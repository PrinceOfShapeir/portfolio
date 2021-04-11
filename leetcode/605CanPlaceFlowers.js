/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let spots = 0, zeroCount = 0;
    
    for (let i = 0; i<flowerbed.length;i++) {
        
        if (flowerbed[i]===0) {    
            zeroCount++;
            if(i===0) zeroCount++;
            if(i===flowerbed.length-1) zeroCount++;
        }
        else {
            if(zeroCount>=3) {

                spots += (zeroCount%2!==0) ? ((zeroCount+1)/2)-1 : (zeroCount/2)-1;
            }
            zeroCount = 0;
        
        }

    }
    
    if(zeroCount>=3) {
        spots += (zeroCount%2!==0) ? ((zeroCount+1)/2)-1 : (zeroCount/2)-1;
    }
    
    console.log(spots)
   
    return spots>=n;
    
    
    
};
