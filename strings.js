// STRING TO WORD ARRAY
function str2word(str) {
    let arr = []
    let word =''
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " " && i != str.length-1) {
            word += str[i]
        } else {
            arr.push(word)
            word = ''
        }

        // word = ''
    }
    // console.log(str.split(" "));
    // return str.split(" ")
    console.log(arr);
}
// str2word("Life is not a game")
// STRING TO ARRAY AND REVERSE
function reverseWordOrder(str) {
    return str.split(" ").reverse().join(" ")
}
console.log(reverseWordOrder("This is so crazy"));
