let x = 3;
const y = x++;// if the ++operator use as postfix then it would change the value of only x

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;// if the ++operator use as prefix then it would change the value of a&b both

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"