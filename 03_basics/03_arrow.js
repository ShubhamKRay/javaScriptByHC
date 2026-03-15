const user = {
  username: "Shubham",
  price: 400,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to our website!`);
    console.log(this);
  },
};
// user.welcomeMessage()
// user.username = "Satyarth";
// user.welcomeMessage()

// console.log(this);

// function shubh(){
//     console.log(this);
// }

// function shubh(){
//     let username = "Shubham";
//     console.log(this.username);
// }
// shubh();

// const shubh = function(){
//     let username = "Shubham";
//     console.log(this.username);
// }
// shubh(); // yaha this ka value global object (window in browsers) hoga, isliye this.username undefined hoga, kyunki global object me username property nahi hai. Arrow functions me this ka value uss scope se aata hai jaha function define hua hai, na ki jaha se call hua hai. Arrow functions me this ka value lexical hota hai, yani ki uss scope se aata hai jaha function define hua hai. Is case me, shubh function global scope me define hua hai, isliye this ka value global object (window in browsers) hoga.



const shubh = () => {
  let username = "Shubham";
  console.log(this);
};
// shubh(); // Arrow functions me this ka value uss scope se aata hai jaha function define hua hai, na ki jaha se call hua hai. Arrow functions me this ka value lexical hota hai, yani ki uss scope se aata hai jaha function define hua hai. Is case me, shubh function global scope me define hua hai, isliye this ka value global object (window in browsers) hoga.



// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }


// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);


const addTwo = (num1, num2) => ({username: "Shubham"});


// console.log(addTwo(3,4)); // 



const myArray = [1, 2, 3, 4, 5];

myArray.forEach(function (num) {
  console.log(num);
});

myArray.forEach((num) => console.log(num));