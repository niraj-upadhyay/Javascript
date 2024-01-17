// Immediately Invoked Function Expression (IIFE)


// IIFE = > Function Immediately execute karne ke liye IIFE ka use karte hai

// IIFE => Global scope ke pollution se problem hoti hai kai barr to Global scope ke jo bhi variable uske pollution ko hatane ke liye IIFE ka us kat 

// (function chai(){
//     console.log(`DB connected`)

// })()

// ()=>Execution or ()=> Call    [()()]

(function chai(){

    // named IIFE

    console.log(`DB connected`)

})();

// (function aurcode(){
//     console.log(`DB connected`)

// })()

((name)=>{
    console.log(`DB connected Two ${name}`)

})('Niraj')

