const marvel_heros = ["thor", "Ironman", "spiderman"]; //! yaha humne ek array banaya hai jisme 3 elements hai, aur ye array marvel_heros variable me store hai.
const dc_heros = ["superman", "flash", "batman"]; //! yaha humne ek aur array banaya hai jisme 3 elements hai, aur ye array dc_heros variable me store hai.

// marvel_heros.push(dc_heros) //! marvel_heros ke end me dc_heros array add ho jayega, aur marvel_heros ka last element ek array hoga.

// console.log(marvel_heros);  
// console.log(marvel_heros[3][1]);//! yaha kya ho raha hai? -> marvel_heros ke 3rd index pe dc_heros array hai, aur uske 1st index pe flash hai.

// const allHeros = marvel_heros.concat(dc_heros) //! concat method se hum do arrays ko merge kar sakte hai, aur ye ek new array return karta hai, original arrays ko change nahi karta.
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]; //! spread operator se bhi hum do arrays ko merge kar sakte hai, aur ye bhi ek new array return karta hai, original arrays ko change nahi karta.

// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]; //! yaha humne ek array banaya hai jisme nested arrays bhi hai.

// const real_another_array = another_array.flat(Infinity); //! flat method se hum nested arrays ko flatten kar sakte hai, aur Infinity pass karne se ye sabhi levels ke nested arrays ko flatten kar dega.
// console.log(real_another_array); 

console.log(Array.isArray("Shubham")); //! isArray method se hum check kar sakte hai ki given value array hai ya nahi, ye true ya false return karta hai.
console.log(Array.from("Shubham")); //! from method se hum kisi iterable object ko array me convert kar sakte hai, yaha string "Shubham" ko array me convert kar diya gaya hai, aur har character ek element ban gaya hai.
console.log(Array.from({ name: "shubham" })); //! interesting case, yaha humne ek object pass kiya hai jisme name property hai, lekin from method se hum is object ko array me convert nahi kar sakte, kyunki ye iterable nahi hai, isliye ye empty array return karega.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //! of method se hum kisi bhi number of arguments ko array me convert kar sakte hai, yaha score1, score2, score3 ko array me convert kar diya gaya hai.
