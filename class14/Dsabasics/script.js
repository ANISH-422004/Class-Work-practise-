// //Q . take 2 numbers and print their sum

// let a = 10;
// let b = 20;
// console.log(a+b);


// //Q . take 2 numbers and print their sum in a sentence

// console.log(`sum of ${a} and ${b} is ${a+b}`);

//UNXPECTED RESULT : console.log("sum of "+a+" and "+b+" is "+a+b);// op: sum of 10 and 20 is 1020 
//Reaon: why is it not working? //answer: because  its going for left to right first come a and string + num  and num is changed by js to string and then string + string is done and then b works on same logic prev maerial is trend in to string and then string + string is done and then b is added to it and then it is added to a and then it is added to sum of a and b


//when js finds a oparant it stops their ans first calculate and  add it then ,,, moves to right and  

//int + int = int
//string + int = string
//int + string = string
//string + string = string 


// "sum of "+ 10 + " and " + 20 + " is " + 20 + 30
// "sum of 10 "  + " and " + 20 + " is " + 20 + 30
//"sum of 10 and " + 20 + " is " + 20 + 30
//"sum of 10 and 20" + "is"+ 20 + 30
//"sum of 10 and 20 is 20" + 30
//"sum of 10 and 20 is 2030"





// //Q. accept 2 numbers from user and print their sum

// let num1 = parseInt(prompt("enter first number"),10); //parseInt is used to convert string to number and promt give output as string so we use parseInt to convert it to number and 10 is the radix which is base of number system
// let num2 = parseInt(prompt("enter second number"),10);
// console.log(num1+num2);

// /// or use Number() to convert string to number

// let num3 = Number(prompt("enter first number")); //Number() is used to convert string to number like "123.45" to 123.45
// let num4 = Number(prompt("enter second number"));
// console.log(num3+num4);





//accept string name and int age forn user scanner and print them in a sentence

// let n = prompt ("enter your name");
// let age = Number(prompt("enter you age "));
// console.log(`name is ${n} and age is ${age}`);








// // accept l and w of a rectangle and print its area and perimeter

// let l  =  Number(prompt("length:"))
// let w = Number(prompt("width:"))
// console.log(`area of rectangle is ${l*w} and perimeter is ${2*(l+w)}`)



// compound interest (hw)


//Math()
//math.random() it gives random number between 0 and 1
//math.floor() it gives the largest integer less than or equal to a given number
//math.ceil() it gives the smallest integer greater than or equal to a given number
//math.round() it gives the value of a number rounded to the nearest integer
//math.abs() it gives the absolute value of a number
//math.max() it gives the largest of zero or more numbers
//math.min() it gives the smallest of zero or more numbers



//accept 2 numbers and print which one is greater

// let num1 = Number(prompt("enter first number")) //N in capital why ? ans: its a constructor function and cponvententiaonally we use capital letter for constructor function

// Constructor functions are special functions that create and initialize objects
// They serve as templates for creating multiple objects with similar properties and methods
                        //        // Constructor function example
                        //    function Person(name, age) {
                        //     this.name = name;
                        //     this.age = age;
                        //   }
                        
                        //   // Usage
                        //   const person1 = new Person("John", 25);


// let num2 = Number(prompt("enter second number"))

//  if (num1>num2){
//     console.log(`${num1} is greater than ${num2}`)
//  }
//  else if (num1<num2){
//     console.log(`${num2} is greater than ${num1}`)
//  }
//  else{  
//     console.log(`${num1} and ${num2} are equal`)
//  }




// accept 2 num chaeck its even or odd and print result
//  let num = Number(prompt("number:"))

//  if (num%2===0){
//     console.log(`${num} is even`)   
//  }
//  else{
//     console.log(`${num} is odd`)
//  }



//In JavaScript, when you divide numbers (using /), the result will always be a floating-point number, even if you're dividing integers that would result in a whole number.



// // valid voter : accpet name and age and print if he is valid voter or not print "hellow name u are valid voter" if age is greater than 18 else print "hellow name u are not valid voter in x years"

// let nam = prompt("nam of candidate");
// let age =  Number(prompt("age of candidate"));


// if (age>=18){
//     console.log(`hellow ${nam} u are valid voter`)
// }
// else{
//     // 18 - age is used to calculate the remaining years to become 18
//     console.log(`hellow ${nam} u are not valid voter and will be a valid voter in ${18 - age}years`) 
// }







//weekday or weekend : accept day number and print if it is weekday name or weekend name

// let daynum = Number(prompt("enter day number"))


// if (daynum === 1){
//     console.log("monday")
// }
// if (daynum === 2){
//     console.log("tuesday")
// }
// if (daynum === 3){
//     console.log("wednesday")
// }   
// if (daynum === 4){
//     console.log("thursday")
// }
// if (daynum === 5){
//     console.log("friday")
// }
// if (daynum === 6){
//     console.log("saturday")
// }
// if (daynum === 7){
//     console.log("sunday")
// }       
 
// with switch case // how it works ?

//waht is fall through ?
//fall through is not allowed in switch case
// if we dont use break then it will fall through to next case and execute it


// let daynum = Number(prompt("enter day number"))

// switch (daynum){
//     case 1:
//         console.log("monday")
//         break;

//     case 2:
//         console.log("tuesday") //
//         break;  
    
//     case 3:
//         console.log("wednesday")
//         break;  

//     case 4:
//         console.log("thursday")
//         break;  

//     case 5:
//         console.log("friday")
//         break;    

//     case 6:
//         console.log("saturday")
//         break;      

//     case 7:
//         console.log("sunday")
//         break;        

//     default:
//         console.log("invalid day number")
//         break;

//     }


// case with multiple values
// example  ; case 1,3,4 taht means if daynum is 1 or 3 or 4 then it will execute the code of case 1



//leap year

// let y = parseInt(prompt("year: "))
// if (y%4 === 0 ){
//     console.log("its leap year");
    
// }
// else{
//     console.log("its not a leap year    ")
// }




//q13. 

// function calculateElectricityBill(units) {
//     let billAmount = 0;

//     if (units <= 100) {
//         billAmount = units * 4.2;
//     } else if (units <= 200) {
//         billAmount = 100 * 4.2 + (units - 100) * 6;
//     } else if (units <= 400) {
//         billAmount = 100 * 4.2 + 100 * 6 + (units - 200) * 8;
//     } else {
//         billAmount = 100 * 4.2 + 100 * 6 + 200 * 8 + (units - 400) * 13;
//     }

//     return `Total bill amount: ${billAmount}`;
// }

// // Example usage:
// let unitsConsumed = 700  ; // You can change this value to test
// console.log(calculateElectricityBill(unitsConsumed));










//q14 . shop discount

// let tot = 11000;
// if (tot>=9000){
//     console.log(`Payable amount ${tot - (tot*0.20)}`)
// }else if(7000<tot<=9000){
//     console.log(`Payable amount ${tot - (tot*0.20)}`);
    
// }


//q15. N times hellow world 
// let n = 5
// for (let i  =  0 ; i<6 ;  i++){
// console.log(`hellow world ${i}`)
// }

//Q16.
// let n  =  10
// let str = ``
// for (let i = 0;  i <11 ; i++){
//  str += ` ${i}`    

// }
// console.log(str);





