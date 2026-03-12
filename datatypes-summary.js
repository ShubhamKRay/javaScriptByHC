//!  Primitive

//!  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100; //! Number
const scoreValue = 100.3; //! Number

const isLoggedIn = false; //! Boolean
const outsideTemp = null; //! null is an empty value. It is an assignment value. It can be assigned to a variable as a representation of no value. It is a primitive value that represents the intentional absence of any object value.
let userEmail; //! undefined is a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments, or to object properties that do not exist. It is also the value of the global variable undefined.

const id = Symbol("123"); //! Symbol is a unique and immutable primitive value and may be used as the key of an Object property. It is a new data type introduced in ES6. It is used to create unique identifiers for objects. It is a primitive data type that is not a number, string, boolean, null, or undefined. It is a unique and immutable value that can be used as a key for object properties. It is a new data type introduced in ES6. It is used to create unique identifiers for objects. It is a primitive data type that is not a number, string, boolean, null, or undefined.
const anotherId = Symbol("123");

// console.log(id === anotherId); //! === is a strict equality operator that checks for both value and type. It returns true if the operands are of the same type and have the same value, and false otherwise. In this case, id and anotherId are both symbols with the same description "123", but they are different symbols, so id === anotherId will return false.
//! == is a loose equality operator that checks for value but not type. It returns true if the operands are equal after type coercion, and false otherwise. In this case, id and anotherId are both symbols with the same description "123", but they are different symbols, so id == anotherId will also return false.
//  const bigNumber = 3456543576654356754n //! large integers can be represented using the BigInt data type, which can represent integers with arbitrary precision. It is a new data type introduced in ES2020. It is used to represent large integers that cannot be represented by the Number data type. It is a primitive data type that is not a number, string, boolean, null, or undefined. It is a new data type introduced in ES2020. It is used to represent large integers that cannot be represented by the Number data type. It is a primitive data type that is not a number, string, boolean, null, or undefined.
//  console.log(typeof bigNumber); //! type of bigNumber is bigint

//! Reference (Non primitive)

//! Array, Objects, Functions



// Array is a special type of object that is used to store multiple values in a single variable. It is a reference data type that can hold a collection of values. It is an ordered list of values that can be of any type, including other arrays and objects. It is a dynamic data structure that can grow and shrink in size as needed. It is a built-in object in JavaScript that provides various methods for manipulating arrays.
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "shubham",
  age: 22,
};


// Functions are also objects in JavaScript. They are first-class citizens, which means they can be treated like any other value. They can be assigned to variables, passed as arguments to other functions, and returned from functions. They are also objects, which means they can have properties and methods. They are a special type of object that can be called and executed. They are a fundamental building block of JavaScript and are used to create reusable code and to organize code into logical units.
const myFunction = function () {
  console.log("Hello world");
}; 


console.log(typeof anotherId); // type of anotherId is symbol
console.log(typeof myFunction); // type of myFunction is function

// https://262.ecma-international.org/5.1/#sec-11.4.3
