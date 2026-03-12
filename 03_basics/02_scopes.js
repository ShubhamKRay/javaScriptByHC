// var c = 300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
//   console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);





function one() {
  const username = "Shubham";

  function two() {
    const website = "Google";
    console.log(username);
  }
//   console.log(website);// ReferenceError: website is not defined

  two();
}

// one()

if (true) {
  const username = "shubham";
  if (username === "shubham") {
    const website = " Google";
    console.log(username + website);
  }
//   console.log(website);// ReferenceError: website is not defined
}

// console.log(username);// ReferenceError: username is not defined








//! ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5));

function addone(num) {
  return num + 1;
}

addTwo(5); // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
  return num + 2;
};
