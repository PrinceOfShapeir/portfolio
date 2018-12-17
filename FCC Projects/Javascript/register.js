var total = function(cid){
    var t = {
     
    sum: 0.00,
    PENNY: 0,
    DIME: 0,
    NICKEL: 0,
    QUARTER: 0,
    ONE: 0,
    FIVE: 0,
    TEN: 0,
    TWENTY: 0,
    //FIFTY: 0,
    "ONE HUNDRED":0
    
    };
    for(let i = 0; i<=cid.length-1;){

//The FCC tests don't include FIFTY, yet this would be an expected use case. A switch was the obvious method to include FIFTY without breaking the operations, as a result changing the size or order of the array doesn't affect the output. 

//I've worked a cash register and bums always try to pass off counterfeit notes, or try to trick you into giving out more change. Since the function must return ALL cash in drawer when its sum is equal to change due, an overflow caused by a client mistakenly passing in FIFTY to the cid array (that did not originally support them) could result in the return of (literally uncounted) hundred dollar bills. I've included this common use case to ensure quality of service. 

  switch(cid[i][0]){

    case 'PENNY': 
      t.sum += cid[i][1];
      t.PENNY += cid[i][1]/0.01.toPrecision(2);
      break;
  
    case 'NICKEL': 
      t.sum += cid[i][1];
      //console.log("nickels" + cid[i][1]);
      t.NICKEL += cid[i][1]/0.05.toPrecision(4);
      break;
  
    case 'DIME':
      t.sum += cid[i][1];
      t.DIME += cid[i][1]/0.10.toPrecision(4);
      break;
    
    case 'QUARTER':
      t.sum += cid[i][1];
      t.QUARTER += cid[i][1]/0.25.toPrecision(2);
      break;
     
    case 'ONE':
      t.sum += cid[i][1];
      t.ONE += cid[i][1]/1.0.toPrecision(2);
      break;
           
    case 'FIVE':
      t.sum += cid[i][1];
      t.FIVE += cid[i][1]/5.0.toPrecision(2);
      break;
    
    case 'TEN':
      t.sum += cid[i][1];
      t.TEN += cid[i][1]/10.0.toPrecision(2);
      break;
    
    case 'TWENTY':
      t.sum += cid[i][1];
      t.TWENTY += cid[i][1]/20.0.toPrecision(2);
      break;
    
    case 'FIFTY':
      //if(!t.FIFTY){t.FIFTY = 0;}
      t.sum += cid[i][1];
      t.FIFTY += cid[i][1]/50.0.toPrecision(2);
      break;
   
    case 'ONE HUNDRED':
      t.sum += cid[i][1];
      t["ONE HUNDRED"] += cid[i][1]/100.0.toPrecision(2);
      break;
    
    default:
      
      console.log("Not matched");
      break;

  }
               
      i+= 1;
    }
  
    t.NICKEL = t.NICKEL.toPrecision(2);
    //console.log(Object.entries(t));
  return t;
}

var insufficient = {status: "INSUFFICIENT_FUNDS", change: []};


function checkCashRegister(price, cash, cid) {
 // console.log(cid.indexOf("ONE HUNDRED"));
  let count = total(cid);
  let change = cash - price;
  //console.log(change);
  //console.log(count.sum);
  if(change>=0){

    if(change>0){

      if (change > count.sum){
        console.log("INSUFFICIENT_FUNDS");
        return insufficient;
      }
      else if(change === count.sum){
        return {status: "CLOSED", change: cid};
      }
      else {
        console.log("sufficient thus far");
        let changeObject = total([["PENNY", 0]]);
        while(change>0){
          if(change>=100&&count["ONE HUNDRED"]>0){
            count["ONE HUNDRED"] -= 1;
            changeObject["ONE HUNDRED"] +=100;
            changeObject.sum +=100;
            change -= 100;
          }
          else if(change>=50&&count.FIFTY>0){
            count.FIFTY -=1;
            changeObject.FIFTY +=50;
            changeObject.sum += 50;
            change -= 50;

          }
          else if(change>= 20&&count.TWENTY>0){

            count.TWENTY -= 1;
            changeObject.TWENTY += 20;
            changeObject.sum += 20;
            change -= 20;
          }
          else if(change>=10&&count.TEN>0){

            count.TEN -=1;
            changeObject.TEN +=10;
            changeObject.sum +=10;
            change -= 10;
          }
          else if(change>=5&&count.FIVE>0){

            count.FIVE -= 1;
            changeObject.FIVE +=5;
            changeObject.sum +=5;
            change -= 5;
          }
          else if(change>=1&&count.ONE>0){
            count.ONE -= 1;
            changeObject.ONE +=1;
            changeObject.sum +=1;
            change -= 1;
          }
          else if(change>=0.25&&count.QUARTER>0){

            count.QUARTER -= 1;
            changeObject.QUARTER += 0.25;
            changeObject.sum += 0.25;
            change -= 0.25
          }
          else if(change>=0.10&&count.DIME>0){

            count.DIME -= 1;
            changeObject.DIME += 0.10;
            changeObject.sum += 0.10;
            change -= 0.10;
          
          }

          else if(change>= 0.05&&count.NICKEL>0){
            count.NICKEL -= 1;
            changeObject.NICKEL+= 0.05;
            changeObject.sum += 0.05;
            change -= 0.05;
          }
          else if(change > 0 && count.PENNY > 0){
            count.PENNY -= 1;
            changeObject.PENNY += 0.01;
            changeObject.sum += 0.01;
            change -= 0.01;
            }
            else if (change>0){
        console.log("INSUFFICIENT_FUNDS");
        console.log(change);
        return insufficient;
            }
        } //while end
        //console.log(count.QUARTER);
        changeObject.PENNY =    changeObject.PENNY.toPrecision(2).toString();
        changeObject.PENNY = parseFloat(changeObject.PENNY);
        changeObject.sum = changeObject.sum.toPrecision(4);
        //console.log("sum = " + changeObject.sum);
        for (var property in changeObject){

          if (changeObject[property]==0){
            //console.log(changeObject.property);
            delete changeObject[property];
          }//removes zero entries

        }

        let changeArr = Object.entries(changeObject);
        changeArr.reverse();
        changeArr.pop();
        //changeArr.unshift();
        //changeArr.unshift();
        console.log(changeArr);
        return {status: "OPEN", change: changeArr};
        /*let changed = [];
        while(changeArr.length>0){

          changed.push(changeArr.splice(0,2));
        }

        //changed.unshift();
        console.log("changed ="+changed);
        console.log("status: 'OPEN'");
      

        //return {status: "OPEN", change: changed};
        console.log ({status: "OPEN", change: [["QUARTER", 0.5]]}=={status: "OPEN", change: changed});*/
      }



    }


  }




}

       



// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
