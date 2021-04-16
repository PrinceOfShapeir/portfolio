/**
 * @param {string} s
 * @return {number}
 https://leetcode.com/submissions/detail/399452048/
 */
var strongPasswordChecker = function(s) {

    let changes = 0;//negative = below 6, positive = above 20
    let changes1 = 0;//chars to change
    let changes2 = 0;//number of triplets = number of changes
    let changes2delete = 0;//sum of consecutives -2 = potential deletions
    let consecutives = new Map();
    //Part 1.
    if(s.length>20){
        changes += s.length - 20;
    }
    else if (s.length<6){
        changes -= 6 - s.length;
    }
    
    //Part 2.
    
    //check for upper
    if(!/[A-Z]/.test(s)){
        changes1++;
    }//lower
    if(!/[a-z]/.test(s)){
        changes1++;
    }//digit
    if(!/[0-9]/.test(s)){
        changes1++;
    }
    
    //Part 3.
    s += " "; //padding s
    
    for(let i = 0, count = 0, fullCount = 0, lastChar = null; i<s.length;i++){
        if(lastChar===null){
            lastChar = s[i];
            count = 1;
            fullCount = count;
            
                             
                       
        }
        else if(lastChar===s[i]){
            count++;
            fullCount++
            if(count>=3){
                changes2++;
                count = count - 3;

            }
                             
        }
        else {
            //console.log("wut");
            lastChar = s[i];
            count = 1;
            if(fullCount>=3){
                changes2delete += fullCount -2;
                if(consecutives.has(fullCount)){
                    consecutives.set(fullCount, consecutives.get(fullCount)+1);
                }
                else{
                    consecutives.set(fullCount, 1);
                }
                
            }
            fullCount = count;
            
        }
    }
    
    console.log(changes);
    console.log(changes1);
    console.log(changes2);
    console.log(changes2delete);
    
 if(changes<0){
            changes *= -1;//flip the sign
            if (changes>=changes2&&changes>=changes1){
                return changes;
            }
           if(changes1<changes2||changes1<changes){
               changes1 = 0;
               
               return changes>=changes2 ? changes : changes2;
               
           } 
           else if(changes1>changes) {
               changes1 = changes1-changes;
               //changes1 = changes1>changes2 ? changes1 : changes2;
               return changes + changes1;
           }

        //return changes > changes2 ? changes : changes2;
        }
   
    else if (changes===0){
        return changes1>=changes2 ? changes1 : changes2;
    }
    else { //changes are positive
        
        if(changes2delete<=changes) return changes + changes1;//changes2delete eaten by changes, changes1 always additive
        else {
            
            //let sortedKeys = Array.from(consecutives.keys()).sort();
            //need to sort by modulus % 3
            function sortByMod3 (array){
                return array.sort((a,b)=> a%3 - b%3);
            }
            //let sortedKeys = Array.from(consecutives.keys()).sort((a,b)=> a%3 - b%3);
            let sortedKeys = sortByMod3(Array.from(consecutives.keys()));
            
            for(let i = 1; i<=changes; i++){
                
                if(sortedKeys.length>0&&changes2delete>0){
                    
                    //find and unshift/pop something with %3 = 0
                    /*
                    if(sortedKeys[0]%3!=0){
                        for(let j in sortedKeys){
                            if(sortedKeys[j]%3===0){

                            [[sortedKeys[0]],[sortedKeys[j]]] = [[sortedKeys[j]], [sortedKeys[0]]];
                            break;

                            }
                        }
                    }*/
                    
                    if(sortedKeys[0]%3!=0){
                        sortedKeys = sortByMod3(sortedKeys).filter(a=>a>=3);
                    }
                    
                    if(sortedKeys[0]%3===0){
                        console.log("consecutives.sortedkeys[0]" + sortedKeys[0]+ " " +consecutives.get(sortedKeys[0]));
                        
                        consecutives.set(sortedKeys[0], consecutives.get(sortedKeys[0])-1);
                        changes2 --;
                        changes2delete --;
                        if(consecutives.get(sortedKeys[0])<=0){
                            consecutives.delete(sortedKeys[0]);
                            sortedKeys.shift();
                        }
                        
                    }
                    else {
                        console.log("consecutives.sortedkeys[0]" + sortedKeys[0]+ " " +consecutives.get(sortedKeys[0]));
                        consecutives.set(sortedKeys[0], consecutives.get(sortedKeys[0]) -1);
                        //console.log("consecutives.sortedkeys[0]" + consecutives.get(sortedKeys[0]));
                        changes2delete--;
                        consecutives.set(sortedKeys[0]-1, 1);
                        let temp = sortedKeys[0];
                        if(consecutives.get(sortedKeys[0])<=0){
                            consecutives.delete(sortedKeys[0]);
                            /*sortedKeys.shift();
                             console.log("should have shifted")*/
                        }

                        sortedKeys.unshift(temp-1);
                    }
                    
                }
                
                else break;
                
                
            }
            let replacements = changes1>=changes2 ? changes1 : changes2;
            console.log("here");
            console.log(`changes2 ${changes2} changes2delete ${changes2delete} sortedKeys ${sortedKeys} consecutives ${[...consecutives.entries()]}`);
            if(changes+replacements<=changes2delete+changes+changes1){
                return changes + replacements; 
            }
            else {
                console.log('uh oh');
                return changes2delete+changes+changes1;
            }
            
            
            
            
            
        }
        
        
        
    }
    
    
  
};
