// SETTING AND SWAPPING
function setting_and_swapping (myNumber, myName) {
    console.log('Original answer ' + myNumber + ' ' + myName);
    temp1 = myNumber
    temp2 = myName
    temp1 = myName
    temp2 = myNumber
    console.log('Twisted answer ' + myName + ' ' + myNumber);
}
// setting_and_swapping(55, 'String')
// PRINT -52 TO 1066
function print_some_numbers() {
    for (var i = -52; i < 1067; i++) {
        console.log(i);
    }
}
// print_some_numbers()
// DONT WORRY BE HAPPY
function be_happy() {
    for (var i = 0; i < 100; i++) {
        console.log(i + ' Good morning dude!');
    }
}
// be_happy()
// MULTIPLES OF THREE BUT NOT ALL
function multiples_of_three() {
    for (var i = -300; i < 0; i++) {
        if (i == -3 || i == -6) {
            continue;
        }
        console.log(i * 3);
    }
}
// multiples_of_three()
// PRINTING INTEGERS WHILE
function printing_ints_while(num1, num2) {
    count = num1
    while(num1 < num2){
        count++
        console.log(count);
    }
}
// printing_ints_while(2000, 5280)
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
// leap_year(100000);