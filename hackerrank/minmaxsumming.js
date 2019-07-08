




//step 1 find min and max while summing
//step 2 subtract min or max from sum
//thats it




function minMaxSum(array) {

    

        if (array.length < 5) {

            return (array) => {

                sum = 0;
                for (let i of array) {

                    sum += array[i];
                }
                return console.log(sum + " " + sum);

            }

        }

        else { //else may proceed

            array[array.length] = 0; //sum length -2
            array[array.length] = 0; //max length -1

            for (let i = 0; i <= array.length - 3; i++) { //does n iterations


                array[array.length - 2] += array[i];
                //sums all of them

                if (array[i] < array[0]) {

                    array[0] = array[i]; //new min


                }

                if (array[i] > array[array.length - 1]) {

                    array[array.length - 1] = array[i]; //new max
                }


            }

            //console.log(array[array.length - 2]);

            return console.log(
                 (array[array.length - 2] - array[array.length - 1]) + " " + (array     [array.length - 2] - array[0]));

        }
    



}

const ray = [6,2,5,1,7,4,3,2,6,3,13];

minMaxSum(ray);
