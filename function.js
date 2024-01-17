function sayMyName (){
    console.log("T")
    console.log("u")
    console.log("L")
    console.log("I")
    console.log("K")
    console.log("A")
}

// sayMyName()

// function addTwoNumber(number1,number2){
//    console.log( number1 + number2)
// }

function addTwoNumber(number1,number2){
    let result =  number1 + number2
    return result;
}
const result = addTwoNumber(2,2)
// console.log("Result : ", result)



function loginusermessage(username="Tulika"){
    if(!username){
        console.log("Please Enter the user name")
        return
    }
    return `${username} just logged in`
}


const user = loginusermessage("Niraj")
console.log(user);

// Passing the argument according to need

function calculatorCarPrice(...num1){
    return num1;
}


console.log(calculatorCarPrice(100,400, 600))

const user1 = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`user is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user1)

handleObject({
    username:"Sam",
    price : 599
})

const mynewArray = [100,400,200,600]

function returnSecondValue(getarray){
    return getarray[1]
}

// console.log(returnSecondValue(mynewArray))

console.log(returnSecondValue([200,500,787,999]))