// Primitive 
// Primitive datatype are seven types

//  String , Number , Boolean , null , undefined , Symbol, BigInt (These datatype are call by value)

const score =100
const scoreValue = 100.4

const isLoggedin = false
const outsideTemp = null
let userEmail


const id = Symbol("123")
const anotherId = Symbol("123")
const bigNumber = 867669878797n // This is bigInt number

// console.log(id === anotherId);


//  Reference (Non primitive)


// Array , object , Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Niraj",
    age:22
}


const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof scoreValue) // datatype Number
// console.log(typeof score)  // datatype Number
// console.log(typeof Boolean) // datatype  boolean
// console.log(typeof undefined) // datatype undefine
// console.log(typeof null) // datatype object
// console.log(typeof bigNumber) // datatype bigint


//  ++++++++++++++++++++++++++++++++++++++++++++

//  Memory Allocation

// Stack (Primitive) , Heap(Non-primitive)

let myYoutube = "niraj"
let anothername = myYoutube
anothername = "chaiaurcode"

console.log(myYoutube)
console.log(anothername )

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

 userTwo.email = "satya@google.com"
 console.log(userOne.email)
 console.log(userTwo.email)






 