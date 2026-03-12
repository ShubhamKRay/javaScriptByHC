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
// console.log(loginUserMessage());




                          //! rest operator
// function calculateCartPrice(...num1){
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000));



const user = {
    username: "Satyarth",
    price: 2000,
    product: "Iphone 14 Pro Max"
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price} and product is ${anyObject.product}`);
   
}
// handleObject(user);
handleObject({
    username: "Satyarth",
    price: 2000,
    product: "Iphone 14 Pro Max"
})


const myNewArray = [200, 400, 500, 2000];
function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([100, 300, 500, 700]));