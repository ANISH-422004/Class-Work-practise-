// let set  = new Set()
// console.log(set);
// set.add(10)
// set.add(10)
// set.add(10)
// set.add(true)
// set.add(10)
// console.log(set)

//Q. will have duplicates in even ocarrance
let arr = [10,12,10,12,4,1,2,4,2,1]
let set = new Set()
for(let i = 0 ; i<arr.length ; i++){
    if(set.has(arr[i])) set.delete(arr[i])
    else set.add(arr[i])
}

console.log(set);
