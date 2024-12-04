// data types
    //non-premitive data type 
        // number // string // boolean // undefined //bigint //symbol
    //reference data type
        //array // object //function

//demonstration on arr/obj is a reference data type
// var arr = [1,2,3]
// var newarr = arr;
// newarr.push(4);
// console.log(arr);
// console.log(newarr);
// so berfore es6 we used to copy array by using loop or take out on elem each then append in new array
// var arr2 = [1,2,3,4,5,6];
// var newarr2 = [];
// for(let i=0;i<arr2.length;i++){
//     newarr2.push(arr2[i]);
// }
// console.log(newarr2);


// but now we use spread operator
// spread operator  : it is used to copy the array or object into "new array" or "new object"

// var arr = [1,2,3];
// var arr2 = [...arr];
// console.log(arr2);



//rest operator : it is used to collect the remaining elements into an array

//function declaration
// function add(a,b,c,...d){
//     return a+b+c , d;
// }
// console.log(add(1,2,3,4,5,6,7,8,9,10),d);

// then d will get [4,5,6,7,8,9,10]


//destructuring
// in array
// var arr = [1,2,3,4,5,6];
// var [a,b,c,...d] = arr;
// console.log(a,b,c,d);

// in object
// var obj = {
//     name : "sarthak",
//     age : 20,
//     city : "delhi",
//     phone : 1234567890,
//     country : "india",
//     state : "delhi"


// }

// var {name,age,city} = obj;
// var {name,age,city,...details} = obj;
// console.log(details);

