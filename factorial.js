
// var factorial = 1;

// for (var i = 1; i <= 5; i++){
//     factorial = factorial * i
//     console.log(i, factorial);
// }


function factorial(n){
    var fact = 1;
    for (var i = 1; i <= n; i++){
        fact = fact * i;
    }
    return fact;
}

var result = factorial(6);
console.log(result);
