/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    for(let i = s.length-1, wordEnd = i;i>=0;i--){
        
        if(s[i]===" ") {
            if(i===s.length-1||s[i+1]===" "){
               wordEnd = i-1;
            } else {
                return wordEnd-i;
            }
                
        }
        else if(i===0) {
            return wordEnd-i+1
        }
        
        
    }
    
    return 0;
    
};
