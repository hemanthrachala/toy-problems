// in this only one parameter ie.; only one string 
function countBs(s) {
    var c = 0;
    for(let i = 0 ; i < s.length; i++) {
        if(s[i] === "B") {
            c++;
        }
    }
    return c;
}
// in this function two parameters,  a string and a character
function countChar(s, char) {
    var c = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === char){
            c++;
        }
    }
    return c;
}

// test cases for count Bs
console.log("TEST CASE 1")
console.log(countBs("ABCDCBA"))
console.log("TEST CASE 2")
console.log(countBs("ABCABCABC"))


// test cases for countchar function
console.log("TEST CASE 3")
console.log(countChar("ABCDCBA","A"))
console.log("TEST CASE 4")
console.log(countChar("ABCDCBA","E"))

