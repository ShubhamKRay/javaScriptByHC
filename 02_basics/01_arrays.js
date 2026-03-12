//! Array   
// Array is a data structure that can hold multiple values at a time. It is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array).
// Arrays can hold values of any type, including numbers, strings, objects, and even other arrays. They are commonly used to store lists of data and can be manipulated using various methods and properties.
// In JavaScript, arrays are dynamic, meaning they can grow and shrink in size as needed. They are also zero-indexed, which means that the first element of the array is accessed with an index of 0, the second element with an index of 1, and so on.
// Arrays can be created using array literals (square brackets) or the Array constructor. They come with a variety of built-in methods for adding, removing, and manipulating elements, such as push(), pop(), shift(), unshift(), slice(), splice(), and many more. Arrays are a fundamental data structure in JavaScript and are widely used in programming for storing and managing collections of data.
// Arrays can be used to store a list of items, such as numbers, strings, or even objects. They are useful for organizing and manipulating data in a structured way. Arrays can be accessed using their index, which starts at 0 for the first element. They also have various methods that allow you to add, remove, and manipulate elements within the array. Overall, arrays are a powerful and versatile data structure in JavaScript that can help you manage and work with collections of data effectively.


//! Creating an array

 const myArr = [0, 1, 2, 3, 4, 5]; 
const myHeros = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);  // javaScript mein array constructor ka use karke bhi array create kar sakte hain, lekin ye syntax thoda purana hai aur aaj kal zyada use nahi hota. Array literals (square brackets) zyada common aur readable hote hain.
// console.log(myArr[1]);  

//! Array methods -> push, pop, shift, unshift, includes, indexOf, join

myArr.push(6) // push method is used to add an element at the end of the array. It modifies the original array and returns the new length of the array. In this case, it adds the number 6 to the end of myArr, resulting in [0, 1, 2, 3, 4, 5, 6].
myArr.push(7) // This line adds the number 7 to the end of myArr, resulting in [0, 1, 2, 3, 4, 5, 6, 7].
myArr.pop()   // The pop method is used to remove the last element from an array. It modifies the original array and returns the removed element. In this case, it removes the number 7 from the end of myArr, resulting in [0, 1, 2, 3, 4, 5, 6].

myArr.unshift(9)  // The unshift method is used to add one or more elements to the beginning of an array. It modifies the original array and returns the new length of the array. In this case, it adds the number 9 to the beginning of myArr, resulting in [9, 0, 1, 2, 3, 4, 5, 6].
myArr.shift()        // The shift method is used to remove the first element from an array. It modifies the original array and returns the removed element. In this case, it removes the number 0 from the beginning of myArr, resulting in [1, 2, 3, 4, 5, 6].

// console.log(myArr.includes(9));  // The includes method is used to check if an array contains a specific element. It returns true if the element is found in the array, and false otherwise. In this case, it checks if the number 9 is present in myArr. Since we removed 0 and added 6, the array now contains [1, 2, 3, 4, 5, 6], so it will return false.
// console.log(myArr.indexOf(3));   // The indexOf method is used to find the index of the first occurrence of a specified element in an array. It returns the index of the element if it is found, and -1 if it is not found. In this case, it checks for the number 3 in myArr. Since 3 is present in the array [1, 2, 3, 4, 5, 6], it will return the index of 3, which is 2 (since array indexing starts at 0).

// const newArr = myArr.join() // The join method is used to join all elements of an array into a string. It takes an optional separator as an argument, which is used to separate the elements in the resulting string. If no separator is provided, it defaults to a comma. In this case, it joins the elements of myArr (which is [1, 2, 3, 4, 5, 6]) into a string with commas separating the numbers, resulting in "1,2,3,4,5,6". The original array myArr remains unchanged after this operation.

console.log(myArr);
// console.log( newArr);

//! slice, splice // The slice method is used to create a new array that contains a portion of the original array. It takes two arguments: the starting index (inclusive) and the ending index (exclusive). The original array remains unchanged. In this case, myArr.slice(1, 3) will return a new array containing the elements from index 1 to index 2 (3 is exclusive), which are [2, 3]. The original array myArr will still be [1, 2, 3, 4, 5, 6] after this operation.

// The splice method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place. It takes three arguments: the starting index, the number of elements to remove, and the elements to add (optional). In this case, myArr.splice(1, 3) will remove 3 elements starting from index 1 (which are [2, 3, 4]) and return them as a new array. The original array myArr will be modified to [1, 5, 6] after this operation.

// console.log("A ", myArr); //! The console.log statement will output the current state of myArr, which is [1, 2, 3, 4, 5, 6] after the previous push and pop operations. It will print "A " followed by the contents of myArr.

// const myn1 = myArr.slice(1, 3); // The slice method is used to create a new array that contains a portion of the original array. In this case, myArr.slice(1, 3) will return a new array containing the elements from index 1 to index 2 (3 is exclusive), which are [2, 3]. The original array myArr will remain unchanged as [1, 2, 3, 4, 5, 6] after this operation.

// console.log(myn1);  
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3);
// console.log("C ", myArr);
// console.log(myn2);
