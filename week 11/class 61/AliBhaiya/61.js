//Q. GCD v1  

// let a = 20;
// let b = 30;
// let i = Math.min(a, b);

// console.log(gcd(a, b, i));

// function gcd(a, b, i) {
//     if (i === 1) return 1;
//     if (a % i === 0 && b % i === 0) return i;

//     return gcd(a, b, i - 1); 
// }


//Q.GCD v2

// function gcd(a,b) {
//     if(a==b) return a
//     if(a>b) return gcd(a-b,a)
//     else return gcd(a,b-a)

// }

// console.log(gcd(20,32));


//Q. find Factor of a number n  {normal way}

// let i = 1
// function factor(n, i) {
//     if (n == i) return n
//     if(n % i ==0) console.log(i);    
//     return factor(n, i + 1)\    
// }

// console.log(factor(50,i))




// let i =1
// function factor(n, i) {
//     if (n < i) return n

//     if(n % i ==0) console.log(i);    
//      factor(n, i + 1)
 // }
// console.log(factor(50,i))





//Q. find Factor of a number n  {factors will be found till n/2  except 1 and n itself } 

let i =1
function factor(n, i) {
    if (i > Math.floor(n/2)){

        console.log(n)
        return
    }

    if(n % i ==0) console.log(i);    
    factor(n, i + 1)
 }

 factor(50,i)