let x = 3;
const y = x++; // if the ++operator use as postfix then it would change the value of only x
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;//if the ++operator use as postfix then it would change the value of only x
// x2 is 4n; y2 is 3n
console.log(y2, x2)
console.log(x, y)