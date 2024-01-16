
let score = "33aab"

console.log(typeof score)
 
let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// "33" => 33
// "33abs" => NaN(not a number)
// true => 1 , false => 0


// let isLoggedIn = ""
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// "" => false
// "himanshu" => true

let someNumber = 22

let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)


// ************* OPERATIONS **************//

let value = 4
let negValue = -value
// console.log(negValue)

// console.log(2*2)
// console.log(2**4)
// console.log(2+2)
// console.log(2/2)
// console.log(5%2)
// console.log(2-2)

let str1 = "heyy.."
let str2 = " himanshu"

let str3 = str1 + str2
console.log(str3)

// console.log(1+ "2") //-- if str is on last index then only last last index treat as str
// console.log("1" + 2) //-- if str is on index 0 then whole indexing treat as str 
// console.log("1" + "2")
// console.log("1" + 2 + 2)

console.log(+true)

let gameCounter = 100
gameCounter--;
// gameCounter++;
console.log(gameCounter);
