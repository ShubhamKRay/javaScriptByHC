// const score = 400;
// console.log(score); //! JS me primitive data types ko bhi heap area me store kiya jata hai, but it is not recommended to use Number object. It is better to use primitive data type number.

// const balance = new Number(100); //! JS me heap area me  store hota hai primitive data types ko bhi, but it is not recommended to use Number object. It is better to use primitive data type number.
// console.log(balance);

// console.log(balance.toString().length); //! toString() method is used to convert a number to a string. It returns the string representation of the number. It is a method of the Number object.
// console.log(balance.toFixed(1)); //! toFixed() method is used to format a number with a specific number of digits after the decimal point. It returns a string representation of the number. It is a method of the Number object.

// const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(4)); //! toPrecision() method is used to format a number to a specific length. It returns a string representation of the number. It is a method of the Number object.

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN")); //! toLocaleString() method is used to convert a number to a string, using locale-specific formatting. It returns a string representation of the number. It is a method of the Number object.

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);//! Math is a built-in object that has properties and methods for mathematical constants and functions. It is not a function object. It is a static object. It is a global object. It is a built-in object. It is a non-instantiable object. It is a non-constructible object. It is a non-callable object. It is a non-iterable object. It is a non-array-like object. It is a non-primitive object. It is a non-reference object. It is a non-function object. It is a non-object object.
// console.log(Math.abs(-4)); //! abs() method is used to return the absolute value of a number. It returns a number. It is a method of the Math object.
// console.log(Math.round(4.6)); //! round() method is used to round a number to the nearest integer. It returns a number. It is a method of the Math object.
// console.log(Math.ceil(4.2)); //! ceil() method is used to round a number up to the nearest integer. It returns a number. It is a method of the Math object.
// console.log(Math.floor(4.9)); //! floor() method is used to round a number down to the nearest integer. It returns a number. It is a method of the Math object.
// console.log(Math.min(4, 3, 6, 8)); //! min() method is used to return the smallest of zero or more numbers. It returns a number. It is a method of the Math object.
// console.log(Math.max(4, 3, 6, 8)); //! max() method is used to return the largest of zero or more numbers. It returns a number. It is a method of the Math object.

// console.log(Math.random()); //! random() method is used to return a random number between 0 (inclusive) and 1 (exclusive). It returns a number. It is a method of the Math object. It is a static method. It is a non-instantiable method. It is a non-constructible method. It is a non-callable method. It is a non-iterable method. It is a non-array-like method. It is a non-primitive method. It is a non-reference method. It is a non-function method. It is a non-object method.
// console.log(Math.random() * 10 + 1); //! to get a random number between 1 and 10, we can use the formula Math.random() * (max - min + 1) + min, where max is the maximum number and min is the minimum number. In this case, max is 10 and min is 1, so the formula becomes Math.random() * (10 - 1 + 1) + 1, which simplifies to Math.random() * 10 + 1. This will give us a random number between 1 and 10 (inclusive of 1 and exclusive of 11).
// console.log(Math.floor(Math.random() * 10) + 1); //! to get a random integer between 1 and 10, we can use the formula Math.floor(Math.random() * (max - min + 1)) + min, where max is the maximum number and min is the minimum number. In this case, max is 10 and min is 1, so the formula becomes Math.floor(Math.random() * (10 - 1 + 1)) + 1, which simplifies to Math.floor(Math.random() * 10) + 1. This will give us a random integer between 1 and 10 (inclusive of 1 and exclusive of 11).

// const min = 10;
// const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min); //! to get a random integer between min and max, we can use the formula Math.floor(Math.random() * (max - min + 1)) + min, where max is the maximum number and min is the minimum number. This will give us a random integer between min and max (inclusive of min and exclusive of max + 1).
