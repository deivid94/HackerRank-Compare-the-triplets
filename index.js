const bob = [10 , 2 ,3];
const alice = [ 5, 2, 8];
//const deivid = [10,9,8] other test case
//const jheni = [7,6,5] other test case



function compareceTriplets (a,b){
   let result = [0 , 0]
    for (let i = 0; i < a.length; i++){
        if (a[i] > b[i] ){
           result[0]++
        } else if (b[i] > a[i]){
            result[1]++
        }
        
    }
    return result
   
}

