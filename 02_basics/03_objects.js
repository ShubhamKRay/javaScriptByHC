// singleton 
// Object.create  


// Symobol create karna
const mySym = Symbol("key1"); // symbol ek unique identifier hota hai, isko hum object ke key ke roop me use kar sakte hain, yaha mySym ek symbol hai, isliye usko hum object ke key ke roop me use kar sakte hain


//!--------- Object literals ---------------

const JsUser = {    // yaha JsUser ek object hai, isko hum object literal kehte hain esme hum directly key value pair define kar sakte hain   
  name: "Shubham",        // key: value
  "full name": "Shubham Ray",    //! Space wali key agar key me space hai to usko string me likhna padta hai
  [mySym]: "mykey1",            //! Symbol ko key banana---agar key me space nahi hai to usko directly likh sakte hain
  age: 18,                      // yaha age ek number hai, isliye usko directly likh sakte hain
  location: "Noida",            // yaha location ek string hai, isliye usko directly likh sakte hain
  email: "shubham@google.com",   // yaha email ek string hai, isliye usko directly likh sakte hain
  isLoggedIn: false,              // yaha isLoggedIn ek boolean hai, isliye usko directly likh sakte hain
  lastLoginDays: ["Monday", "Saturday"],  // yaha lastLoginDays ek array hai, isliye usko directly likh sakte hain
};                                          

console.log(JsUser.email)  //! Dot Notation object ke andar ke value ko access karne ke liye hum dot notation ka use karte hain, yaha JsUser.email se hum email ki value ko access kar rahe hain
console.log(JsUser["email"]) //! Square Bracket Notation yaha JsUser["email"] se bhi hum email ki value ko access kar sakte hain, isme hum square bracket notation ka use karte hain, yaha JsUser["email"] se hum email ki value ko access kar rahe hain
console.log(JsUser["full name"]) //! Space wali key yaha JsUser["full name"] se hum full name ki value ko access kar rahe hain
console.log(JsUser[mySym])  // yaha JsUser[mySym] se hum mySym ki value ko access kar rahe hain, yaha mySym ek symbol hai, isliye usko square bracket notation me likhna padta hai, yaha JsUser[mySym] se hum mySym ki value ko access kar rahe hain

JsUser.email = "shubham@chatgpt.com";  // object ke andar ke value ko change karne ke liye hum dot notation ka use karte hain, yaha JsUser.email se hum email ki value ko change kar rahe hain
Object.freeze(JsUser) // Object.freeze() method se hum object ko freeze kar sakte hain, isse hum object ke andar ke value ko change nahi kar sakte hain, isse hum object ke andar ke key ko add bhi nahi kar sakte hain, isse hum object ke andar ke key ko delete bhi nahi kar sakte hain
JsUser.email = "shubham@microsoft.com"; // yaha JsUser.email se hum email ki value ko change karne ki koshish kar rahe hain, lekin Object.freeze() method ke wajah se hum email ki value ko change nahi kar sakte hain, isliye yaha email ki value change nahi hogi
console.log(JsUser); // yaha JsUser ko print karne par hume email ki value change nahi hogi, isliye yaha email ki value change nahi hogi

// Object.seal(JsUser) // Object.seal() method se hum object ko seal kar sakte hain, isse hum object ke andar ke value ko change kar sakte hain, lekin isse hum object ke andar ke key ko add nahi kar sakte hain, isse hum object ke andar ke key ko delete bhi nahi kar sakte hain
// JsUser.email = "shubham@apple.com"; // yaha JsUser.email se hum email ki value ko change karne ki koshish kar rahe hain, lekin Object.seal() method ke wajah se hum email ki value ko change kar sakte hain, isliye yaha email ki value change ho jayegi
// console.log(JsUser); // yaha JsUser ko print karne par hume email ki value change ho jayegi, isliye yaha email ki value change ho jayegi

// JsUser.greeting = function () {
//   console.log("Hello JS user"); // yaha JsUser.greeting ek function hai, isliye usko hum function ke andar define kar sakte hain, yaha JsUser.greeting ek method hai, isliye usko hum method ke andar define kar sakte hain
// };

// JsUser.greetingTwo = function () {
//   console.log(`Hello JS user, ${this.name}`); // yaha JsUser.greetingTwo ek function hai, isliye usko hum function ke andar define kar sakte hain, yaha JsUser.greetingTwo ek method hai, isliye usko hum method ke andar define kar sakte hain, yaha this.name se hum JsUser ke name ki value ko access kar rahe hain
// };

// console.log(JsUser.greeting()); // yaha JsUser.greeting() se hum greeting method ko call kar rahe hain, isliye yaha "Hello JS user" print hoga
// console.log(JsUser.greetingTwo());// yaha JsUser.greetingTwo() se hum greetingTwo method ko call kar rahe hain, isliye yaha "Hello JS user, Shubham" print hoga 
