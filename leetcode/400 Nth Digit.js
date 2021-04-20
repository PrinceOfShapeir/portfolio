/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    
    
    
    for (let i = 1, output = 0, nextPowerOfTen = 1, tens = 10; i<=n&&output<=n; i++){
        
        if(i>=tens){
            nextPowerOfTen++;
            tens *= 10
        }
        
        if(nextPowerOfTen+output===n) return i%10;
        else if (nextPowerOfTen + output > n) {
            
            return i.toString()[n - output -1]
            
        }
        else output += nextPowerOfTen;
        
        
    }
};
