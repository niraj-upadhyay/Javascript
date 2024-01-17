
// console.log(Math.PI)
// Math.PI=5
// console.log(Math.PI)


// const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter)

const chai = {
    name : "Ginger chai",
    price : 250,
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai, "name",{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

