


function maxSum(arr) {
   let results = [];
   

   let sum1 = 0; 
   let sum2 = 0; 
   let sum3 = 0; 

    let incl = arr[0];
    let excl = 0;
    let excl_new;
    let i;

    for (let index = 1; index < arr.length; index++) {
       excl_new = (incl > excl) ? incl : excl;

       incl = excl + arr[index]
       excl = excl_new
        
    }
   
   return Math.max(incl, excl)
}


console.log(maxSum([75,105,120,75,90,135]))




