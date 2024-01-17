//  Block scope or Globel scope

// let a = 10
// var b = 20
// const c = 40

let o = 400


if(true){
let a = 10
let o = 78
var b = 20
const c = 40
console.log("INNER: ", o)
}

// console.log(a)
// console.log(b)
// console.log(c)

console.log(o)

// Nested Function

function one(){
    const username = "Tulika"

    function two(){
        const website = "Youtube"
        // console.log(username)
    }

    // console.log(website)
    two()

}

one()

if(true){
    const username = "Niraj"
    if(username === "Niraj")
    {
        const website = " Youtube"
        // console.log(username + website)
    }
    // console.log(website)
}

// +++++++++++ Interesting +++++++++++++



function addone(num){
    return num + 1
}

console.log(addone(6))

const addTwo = function(num){
  return num + 2
}

console.log(addTwo(9))


