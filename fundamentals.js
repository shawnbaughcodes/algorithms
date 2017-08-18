// SETTING AND SWAPPING
function setting_and_swapping (myNumber, myName) {
    console.log('Original answer ' + myNumber + ' ' + myName);
    temp1 = myNumber
    temp2 = myName
    temp1 = myName
    temp2 = myNumber
    console.log('Twisted answer ' + myName + ' ' + myNumber);
}
setting_and_swapping(55, 'String')
// PRINT -52 TO 1066
function print_some_numbers() {
    for (var i = -52; i < 1067; i++) {
        console.log(i);
    }
}
print_some_numbers()
// DONT WORRY BE HAPPY
function be_happy() {
    for (var i = 0; i < 100; i++) {
        console.log(i + ' Good morning dude!');
    }
}
be_happy()
// MULTIPLES OF THREE BUT NOT ALL
function multiples_of_three() {
    for (var i = -300; i < 0; i++) {
        if (i == -3 || i == -6) {
            continue;
        }
        console.log(i * 3);
    }
}
multiples_of_three()
// PRINTING INTEGERS WHILE
function printing_ints_while(num1, num2) {
    count = num1
    while(num1 < num2){
        count++
        console.log(count);
    }
}
printing_ints_while(2000, 5280)
// LEAP YEAR
function leap_year(year) {
    if(year % 400 == 0){
        console.log('Leap year!');
    } else if (year % 100 == 0) {
        console.log('Not a leap year');
    } else if (year % 4 == 0) {
        console.log('Leap year!');
    } else {
        console.log('Not a leap year');
    }
}
leap_year(100000);
// SIGMA
function sigma(num) {
    let sum = 0
    for (let i = 0; i <= num; i++) {
        sum += i
    }
    console.log(sum);
}
sigma(22)
// FACTORIAL
function factorial(num) {
    let sum = 1
    for (let i = 1; i <= num; i++) {
        sum *= i
    }
    console.log(sum);
}
factorial(5)
// STAR ART
// left
function drawLeftStars(num) {
    for (let i = 0; i <= num; i++) {
        console.log('*');
    }
}
drawLeftStars(20)
// right
function drawRightStars(num) {
    for(let i = 0; i <= num; i++){
        if (i == num) {
            console.log('*');
        } else {
            console.log('space');
        }
    }
}
drawRightStars(10)
// THREES AND FIVES
function threesFives(num1, num2) {
    if (num1 % 3 == 0 && num2 % 3 == 0) {
        console.log('Divisible by 3');
    } else if (num1 % 5 == 0 && num2 % 5 == 0) {
        console.log('Divisible by 5');
    } else {
        console.log('Neither');
    }
}
threesFives(100, 4000000)
function generateCoinChange(cents) {
    let quaters = 25
    let remains1 = cents % quaters
    console.log(remains1);
    let dimes = quaters % 10
    let nickels = dimes % 5
    let pennies = nickels % 1
//     for (var i = 1; i <= cents; i++) {
//         if (quaters) {
//             console.log(i);
//         }
//     }
}
generateCoinChange(94)
