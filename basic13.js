// PRINT 1-255
function print_1_255() {
    for (var i = 1; i < 256; i++) {
        console.log(i);
    }
}
// print_1_255()
// PRINT ODDS 1-255
function print_odd_1_255() {
    for (var i = 1; i < 255; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
// print_odd_1_255()
// PRINT INTS AND SUM 0-255
function print_ints_and_sum() {
    sum = 0
    for (var i = 0; i < 256; i++) {
        sum += i
        console.log(i);
        console.log('Sum is ' + sum);
    }
    console.log(sum);
}
// print_ints_and_sum()
// ITERATE AND PRINT ARRAY
function iterate_and_print(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// iterate_and_print([3,5,2,62])
// FIND ND PRINT MAX
function find_and_print_max(arr) {
    max = arr[1]
    for (var i = 1; i < arr.length; i++) {
         if (arr[i] > max) {
             max = arr[i]
         }
    }
    console.log(max);
}
// find_and_print_max([3,1,3,-8,5,899])
// GET AND PRINT AVERAGE
function get_and_print_avg(arr) {
    avg = 0
    sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum);
    console.log(arr.length);
    return console.log(sum / arr.length);
}
// get_and_print_avg([2,2,5,1,67])
// ARRAY WITH ODDS
function array_with_odds() {
    arr = []
    for (var i = 1; i < 255; i++) {
        if (i % 2 != 0) {
            arr.push(i)
        }
    }
    console.log(arr);
}
// array_with_odds()
// SQUARE THE VALUES
function square_the_values(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log('Regular number ' + arr[i]);
        console.log('Squared ' + arr[i] * 2);
    }
}
// square_the_values([2,3,1,5,2])
// GREATER THAN Y
function greater_than_y(arr, y) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            console.log(arr[i]);
        }
    }
}
// greater_than_y([1,5,3,54,2,4,45,13], 12)
// ZERO OUT A NEGATIVE
function zero_out_a_negative(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0
        }
    }
    console.log(arr);
}
// zero_out_a_negative([-23,4,24,0,-2,4,5,6])
// MIN MAX AVERAGE
function min_max_avg(arr) {
    min = 0
    max = 0
    sum = 0
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        if (arr[i] > max) {
            max = arr[i]
        }
        sum += arr[i]
    }
    console.log('Max is ' + max);
    console.log('Min is ' + min);
    console.log('Average is ' + sum / arr.length);
}
// min_max_avg([2,3,5,23,53,34,4,12,4,5313,43,1,90,-5])
function swap_string(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo'
        }
    }
    console.log(arr);
}
// swap_string([-3,-5,3,5,3,-56,5,0])
// SHIFT ARRAY VALUES
function shift_array(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]
    }
    arr[arr.length - 1] = 0
    console.log(arr);
}
shift_array([1,2,4,5,6,7,4])
