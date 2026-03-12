// console.log("I");
// console.log("Am");
// console.log("The");
// console.log("Best");

function best(){
    console.log("I");
    console.log("Am");
    console.log("The");
    console.log("Best");
}
// best();
// best();
// best();
// best();



                    //! Parameters
// function addTwoNumbers(num1, num2){ 
//     console.log(num1 + num2);
// }
// addTwoNumbers(3, 4);
          //! Arguments



// function addTwoNumbers(number1, number2){ 
//     console.log(number1 + number2);
// }  



function addTwoNumbers(number1, number2) {
//   let result = number1 + number2;
//   return result;

return number1 + number2;
} 
const result = addTwoNumbers(3, 4);

// console.log(result);




function loginUserMessage(username = "Satyarth"){
// function loginUserMessage(username){
    // if(username === undefined){
    if(!username){
        console.log("please enter a username");
        return;
        }
    return `${username} just logged in`;
}
// console.log(loginUserMessage("Satyarth"));
console.log(loginUserMessage());
