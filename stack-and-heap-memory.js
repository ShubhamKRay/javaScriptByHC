//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(primitive) and Heap(Non-primitive) Memory
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let myYoutubename = "shubhkipathsala";
let anothername = myYoutubename;
anothername = "CodeWithShubham";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
  email: "shubham@example.com",
  upi: "shubham@oksbi",
};

let userTwo = userOne;
userTwo.email = "ray@google.com";
console.log(userOne.email);
console.log(userTwo.email);
