//! Empty banana
//  const tinderUser = new Object() // Object constructor se hum empty object create kar sakte hain, yaha tinderUser ek empty object hai, isme abhi koi key value pair nahi hai
const tinderUser = {}; // Empty object create karne ke liye hum curly braces ka use karte hain, yaha tinderUser ek empty object hai, isme abhi koi key value pair nahi hai

//! Object me properties add karna
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


//! Nested Object -> Object ke andar object 
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "shubham",
      lastname: "ray",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);


//! Object merge karna
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }

//! Object.assign() method se hum object ko merge kar sakte hain, isme hum pehle empty object denge aur uske baad jitne bhi object ko merge karna hai unko denge, yaha obj3 me obj1, obj2 aur obj4 ko merge kar rahe hain, isliye obj3 me obj1, obj2 aur obj4 ke key value pair aa jayenge
const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = { ...obj1, ...obj2 }; //! Spread operator se bhi hum object ko merge kar sakte hain, isme hum pehle empty object denge aur uske baad jitne bhi object ko merge karna hai unko denge, yaha obj3 me obj1 aur obj2 ko merge kar rahe hain, isliye obj3 me obj1 aur obj2 ke key value pair aa jayenge
// console.log(obj3); // yaha obj3 me obj1, obj2 aur obj4 ke key value pair aa jayenge, isliye yaha obj3 me 1: "a", 2: "b", 3: "a", 4: "b", 5: "a", 6: "b" print hoga




//! Array of objects
const users = [
  {
    id: 1,
    email: "s@gmail.com",
  },
  {
    id: 1,
    email: "s@gmail.com",
  },
  {
    id: 1,
    email: "s@gmail.com",
  },
];

users[1].email;
// console.log(tinderUser);


//! Object methods
// console.log(Object.keys(tinderUser)); // Object.keys() method se hum object ke keys ko array ke roop me le sakte hain, yaha Object.keys(tinderUser) se hume tinderUser ke keys ka array milega, isliye yaha ["id", "name", "isLoggedIn"] print hoga
// console.log(Object.values(tinderUser)); // Object.values() method se hum object ke values ko array ke roop me le sakte hain, yaha Object.values(tinderUser) se hume tinderUser ke values ka array milega, isliye yaha ["123abc", "Sammy", false] print hoga
// console.log(Object.entries(tinderUser)); // Object.entries() method se hum object ke key value pair ko array ke roop me le sakte hain, yaha Object.entries(tinderUser) se hume tinderUser ke key value pair ka array milega, isliye yaha [["id", "123abc"], ["name", "Sammy"], ["isLoggedIn", false]] print hoga

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // hasOwnProperty() method se hum check kar sakte hain ki object ke andar koi key exist karti hai ya nahi, yaha tinderUser.hasOwnProperty('isLoggedIn') se hum check kar rahe hain ki tinderUser ke andar isLoggedIn key exist karti hai ya nahi, isliye yaha true print hoga
// console.log(tinderUser.hasOwnProperty('isAdmin')); // yaha tinderUser.hasOwnProperty('isAdmin') se hum check kar rahe hain ki tinderUser ke andar isAdmin key exist karti hai ya nahi, isliye yaha false print hoga



//! ++++++++++++++++++++++  OBJECT DESTRUCTURING  ++++++++++++++++++++++++++++++
const course = { // yaha course ek object hai, isme humne 3 key value pair define kiya hai, isliye yaha course me name, coursename, price aur courseInstructor ke key value pair hai
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "shubham",
};

course.courseInstructor // yaha course.courseInstructor se hum courseInstructor ki value ko access kar rahe hain, isliye yaha "shubham" print hoga

//! Object destructuring se hum object ke andar ke value ko easily access kar sakte hain, isme hum object ke andar ke key ko variable ke roop me le sakte hain, yaha courseInstructor variable me course ke andar ke courseInstructor key ki value aa jayegi, isliye yaha "shubham" print hoga
//! Ab direct use kar kar sakte hain bina course.courseInstructor likhe, isliye yaha instructor variable me course ke andar ke courseInstructor key ki value aa jayegi, isliye yaha "shubham" print hoga
const { courseInstructor: instructor } = course; // Rename kar sakte hain, yaha courseInstructor variable ko instructor variable me rename kar rahe hain, isliye yaha instructor variable me course ke andar ke courseInstructor key ki value aa jayegi, isliye yaha "shubham" print hoga


console.log(instructor);




//! JSON -> JavaScript Object Notation 
//! JSON ek data format hai, isme hum data ko key value pair ke roop me store karte hain, isme hum data ko easily read aur write kar sakte hain, isme hum data ko easily transfer kar sakte hain, isme hum data ko easily parse kar sakte hain, isme hum data ko easily stringify kar sakte hain
// {
//     "name": "shubham",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[{}, {}, {}];  //! Array of objects, yaha humne 3 empty object create kiya hai, isliye yaha 3 empty object ka array ban gaya hai, isme hum 3 object ke andar ke key value pair define kar sakte hain, isliye yaha 3 object ke andar ke key value pair define kar sakte hain
