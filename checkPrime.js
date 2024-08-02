// var n = 109;

// for (i = 2; i < n; i++){
//     // console.log(i, n % i);
//     if(n%i ==0){
//         console.log("Not a prime number");
//         break;
//     }
// }
// console.log("Your Number is a prime number")


// or 


function isPrime(n){
    for(i = 2; i < n; i++){
        if(n % i == 0){
            return 'not a prime number';
        }
    }
    return 'your number is a prime number';
}

var result = isPrime(128);
console.log(result);