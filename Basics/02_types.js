// PEMDAS - Parenthesis, Exponent, Multiplication, Division, Addition, Subtraction

// Primitive data types

// let age = 21
// let name = 

// console.log(typeof age);
// console.log( name);
// console.log(typeof undefined);
// console.log(typeof null);

console.log("");
console.log("Conversion Operations");

//Conversion Operations

let score = 33
let stringScore = ""

console.log(score);
console.log(typeof score);

console.log(typeof (stringScore));

const valueNumber = Number(stringScore);
console.log(valueNumber);
console.log(typeof valueNumber);

// '33' => 33 (string to number)
// '33abc' => NaN (Not a Number)
// true => 1 ; false => 0


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false
// "abc" true

console.log("");
console.log("Operations");

//***********************  Operations  ***********************

let str_1 = "Hello"
let str_2 = "World"
let fullString = str_1 + " " + str_2
console.log(fullString);

let num_1 = 2
let num_2 = 5
let totalnum = num_1 ** num_2
console.log(totalnum);

console.log(2 + 4 * 5 / 3);
console.log(10 + 4 * 5 % 3)

console.log("");
console.log("ata types primitive and non-primitive");

// ******************  data types primitive and non-primitive  ***********************

// Primitive data types - number, string, boolean, undefined, null, symbol, bigint

string = "Hello World"
number = 45
boolean = true
undefined = undefined
symbol = Symbol("This is a symbol")
bigint = 1234567890123456789012345678901234567890n

// Non-primitive data types - object, array, function

array = [1,2,3,4,5];
const myObj = {
    name : "usama",
    age : "age"
}

const myFunction = function(){
    console.log("how are you");

}
myFunction()

console.log(array);
console.log(myObj);

console.log("");
console.log("Stack & Heap");

//++++++++++++++++++++++ Stack(primitive) & Heap(non-primitive) memory +++++++++++++++++++++++

let subName = "Usama"

let fullName = subName
fullName = "muhammad Usama"

console.log(subName);
console.log(fullName);



let obj_1 = {
    email : "usama@example.com",
    password : 1234
}

let obj_2 = obj_1

obj_2.email = "usamazarishah@gmail.com"

console.log(obj_1);
console.log(obj_2);

console.log("");
console.log("String");

// ++++++++++++++++++  String  +++++++++++++++++++++
 
let = name = 'usama'
let age = 18

console.log(`My name is ${name}, and i am ${age} years old.`);

const game = "muhammad usama "

console.log(game.__proto__);


console.log(game.length);  //length malom karne k leye.
console.log(game.toUpperCase());  //all the value is capitalize.
console.log(game.toLowerCase());  //all the value is small.
console.log(game.charAt(3));  //value ka konsa alphabet konse number par hai.
console.log(game.indexOf('a'));  //value ka konsa alphabet konse index par hai.
console.log(game.repeat(3 )); //repeat the value.
console.log(game.replace('muhammad usama', 'usama zarishah')); //replace the old value and give the new value.
console.log(game.slice(5)); //five alphabet ke bad wali sari value dega.
console.log(game.slice(3, 15)); //three se le kar fifteen tak value dega.
console.log(game.slice(-5)); //minus mai yeh end wali value se start karega. 
console.log(game.trim()); // start or end mai value ki jo extra space hoti hai usko kat deta hai.
console.log(game.concat('zarishah')); //dono string ko apis mai aik kar deta hai concat.
console.log(game.includes('usama')); //includes true or false ka kam karta hai jaise ke jo value hamare pas hagi tu yeh true return karega otherwise false
console.log(game.includes('khan')); //yaha hamare pas is name ki value nahi hai yaha false return kar raha hai


console.log('');
console.log('Numbers');

//+++++++++++++++ Numbers +++++++++++++++++++++++++

const balance = 400
console.log(balance);

const totalBalance = new Number(1000)

console.log(totalBalance);
console.log(totalBalance.toFixed(2)); //number ki value ke bad do digit deta hai.
console.log(typeof(totalBalance.toString())); //number ko string mai convert karta hai.


console.log('');
console.log('Math');

//++++++++++++++++++  Math  ++++++++++++++++++
 
console.log(Math.abs(-4.5)); //absolute minus value ko plus mai change kar deta hai.
console.log(Math.round(4.6)); //round 4.5 > value ko round kar ke 5 kar dega < 4.5 value ko 4 kar dega.
console.log(Math.floor(4.9)); //floor jo bhi point ke bad wali value hogi us ko ignor karega.
console.log(Math.ceil(4.1)); //ceil  jo bhi point ke bad wali value hogi usko aik pora decimal karega, for example 4.1 ko direct 5 karega. 
console.log(Math.min(4,5,2,8)); //min array mai sub se choti value dega.
console.log(Math.max(4,5,2,8)); //max array mai sub se bari value dega.

console.log(Math.random());
console.log(Math.floor(Math.random(3)*10+1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * ((max - min + 1) ))+min);



console.log('');
console.log('Date');

// +++++++++++++++++  Date  +++++++++++++++++++

let myDate = new Date()

console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toString());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());



console.log('');
console.log('Array');

// +++++++++++++++++  Array  +++++++++++++++++++

const myArray = [1, 2, 3, 4, 5, 6]
const myArray2 = new Array ('usama', 'zari', 'shah')

console.log(myArray);
console.log(myArray2);

//Methods of array
console.log(myArray2[0]); //array ka index numbers 


myArray.push(7) //add the value in the last of array
console.log(myArray);

myArray.pop() //remove the value in the last of array
console.log(myArray);

myArray2.unshift('muhammad') //add the value in the start of the array
console.log(myArray2);

myArray2.shift() //remove the value in the start of the array
console.log(myArray2);

console.log(myArray.includes(9)); //array mai jo value nahi hote to boolean return karta hai
console.log(myArray.indexOf(3)); //array ki value ka index number batata hai

console.log(myArray.join()); //array ko string mai convert karta hai



