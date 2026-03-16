//! IIFE (Immediately Invoked Function Expression)

// IIFE ye kya hota hai? IIFE ek aisa function hota hai jo define hote hi turant execute ho jata hai. Iska main purpose hota hai ki hum apne code ko encapsulate kar sakein aur global scope ko pollute na karein.

// IIFE ko define karne ke liye hum function expression ka use karte hain, jise parentheses me wrap kiya jata hai, aur uske baad turant parentheses me invoke kiya jata hai.

(function (){ //named IIFE
    console.log(`DB CONNECTED`);
})(); // IIFE ko define karne ke baad turant invoke karna hota hai, isliye hum parentheses me invoke karte hain. Is case me, jab hum IIFE ko invoke karte hain, to console me "DB CONNECTED" print hoga. IIFE ka main purpose hota hai ki hum apne code ko encapsulate kar sakein aur global scope ko pollute na karein. IIFE ke andar jo bhi variables ya functions define hote hain, wo sirf usi IIFE ke andar accessible hote hain, aur global scope me unka koi effect nahi hota.


((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('John'); // yaha hum IIFE me ek parameter pass kar rahe hain, jiska naam "name" hai. Jab hum IIFE ko invoke karte hain, to hum usme "John" pass kar rahe hain. Is case me, jab hum IIFE ko invoke karte hain, to console me "DB CONNECTED TWO John" print hoga. IIFE ke andar jo bhi variables ya functions define hote hain, wo sirf usi IIFE ke andar accessible hote hain, aur global scope me unka koi effect nahi hota.







