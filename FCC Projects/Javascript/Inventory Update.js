function updateInventory(arr1, arr2) {
   // All inventory must be accounted for or you're fired!
   let unmatched = new Array(arr2.length).fill(1);


   for(let i in arr2){
     
       for(let z in arr1){
       if(arr2[i][1]===arr1[z][1]){
           arr1[z][0]+=arr2[i][0];
         unmatched[i] = 0;
       }
       //arr1[z] = arr1[z].reverse();
       }
   }


   for (let i in unmatched){
       if(unmatched[i]===1){
           arr1.push(arr2[i]);
       }
   }
//console.log(arr1);
  arr1.sort((a,b)=>{


      let c, d;
      c = a[1].toUpperCase();
      d = b[1].toUpperCase();
      return c<d?-1:c>d?1:0;
     
  });


     
  console.log(arr1);
   return arr1;
}


// Example inventory lists
var curInv = [
   [21, "Bowling Ball"],
   [2, "Dirty Sock"],
   [1, "Hair Pin"],
   [5, "Microphone"]
];


var newInv = [
   [2, "Hair Pin"],
   [3, "Half-Eaten Apple"],
   [67, "Bowling Ball"],
   [7, "Toothpaste"]
];


//updateInventory(curInv, newInv);
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);