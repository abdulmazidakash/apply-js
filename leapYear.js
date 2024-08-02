// console.log(2030 / 4);


// or 

// const year = 3688;
// console.log(3688 % 4);

// or 

// const year = 3996;
// let remainder = year % 4;
// console.log(remainder == 0);

// or

// const year = 3998;
// let remainder = year % 4;
// if (remainder == 0){
//     console.log('Your year is a leap Year');
// }
// else {
//     console.log('Your year is not a Leap Year');
// }

// or 

function isLeapYear(year){
    const remainder = year % 4;
    if (remainder == 0){
        return true;
    }
    else{
        return false;
    }
}

const check2000 = isLeapYear (2000);
console.log(check2000);
