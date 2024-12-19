arr = [10,8,16,2,5,1,20]

for (let i = 0 ; i<arr.length-1 ; i++){ // number of phases 
    for (let j = 0 ; j < arr.length-1-i ; j++ ){  //  numer of excution for each hase
        if ( arr[j]> arr[j+1]){
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]]   // swap 
        }
        console.log(arr);
        
        // passing (by default)
    }
}
console.log(arr);
