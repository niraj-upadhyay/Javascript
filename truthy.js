const userEmail = []


if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Dont have user email"); 
}

// Truthy values


// "0",'false'," ", [], {}, function(){}

// False values

// false,0,-0, BigInt, "", null, undefined, NaN

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0)
{
    console.log("object is empty")
}

//  Nullish Coalescing Operator (??): null undefined



let val1;

// val1 = 5 ?? 10
val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? 10 ?? 20

console.log(val1)

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")
