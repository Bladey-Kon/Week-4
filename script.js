function min(a, b) {
    if (a < b) return a;
    else return b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


function countChar(string, ch) {
    let counted = 0
    for (let s = 0; s < string.length; s++) {
        if (string[s] == ch) {
            counted += 1;
        }
    }
    return counted;
}

function countSs(string) {
    return countChar(string, "s");
}

console.log(countSs("mississippi")); 
// will output 4
console.log(countChar("q", "mississippi"));
// will output 0