//Q sieves of eratosthenes : 
// definea function that takes a number n and returns all prime numbers upto n using the sieve of eratosthenes algorithm.
// The algorithm is to mark all the multiples of a number as not prime and then return the numbers that are not marked as not prime.
// The function should return an array of prime numbers.

// let n = Number(prompt("Enter a number: "));


function checkPrime(n) {
    let arr = new Array(n + 1).fill(true);
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (arr[i]==true) {
            for (let j = i * i; j <= n; j += i) { // start j form i*i because all the numbers before i*i are already marked as not prime by the previous numbers. example: 2*3 = 6, 3*2 = 6, so we only need to mark 6 once. 
                
                arr[j] = false;
            }
        }
    }
    let primes = [];
    for (let i = 2; i <= n; i++) {
        if (arr[i]) {
            primes.push(i);
        }
    }
    return primes;
}

console.log(checkPrime(30));
