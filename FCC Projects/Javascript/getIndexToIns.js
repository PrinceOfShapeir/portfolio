function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
let over, under, same;
under = same = over = 0;


for(let i in arr){
  if(arr[i]>num){
    over++;

  }
  else if(arr[i]<num){
    under++;
  }
  else same++;
}

return (over+under+same) - (over + same);


  
}

console.log(getIndexToIns([3, 10, 5], 3));
