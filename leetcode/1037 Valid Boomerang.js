/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    
    //check for equality and return false
    if(points[0].toString()===points[1].toString()||
      points[0].toString()===points[2].toString()||
      points[1].toString()===points[2].toString()||
       
       //obvious straight lines
      points[0][1]===points[1][1]&&points[1][1]===points[2][1]||
      points[0][0]===points[1][0]&&points[1][0]===points[2][0]) return false;
    
    points.sort((a,b)=>a[0]-b[0]);
    console.log(points)
    

    let slope1_2 = (points[1][1] - points[0][1])/(points[1][0]-points[0][0]);
    let slope2_1 = (points[2][1]-points[1][1])/(points[2][0]-points[1][0])
    
    if(slope1_2 === slope2_1) return false;
    else return true;
    
        /*
    let intercept = points[0][1] - slope * points[0][0];
    
    console.log(
        (points[2][1]-points[0][1])%slope
    );
    
    if((points[2][1]-intercept)/slope===points[2][0]) return false;
    
    if((points[2][1]-points[0][1])%slope===0) return false;*/
    
    
};
