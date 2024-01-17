const user = {
    username : "Niraj",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
    }
}

// user.welcomeMessage()
// user.username = "Tulika"
// user.welcomeMessage()

// function chai(){
//     let username = "satya"
//     console.log(this.username)
//     console.log(this)
// }

// chai()

//  This keyword is used in context not work in function



// const chai = function (){
//     let username = "Niraj"
//     console.log(this.username)
// }

// chai()


//  Arrow Function

// const chai = () =>{
//     let useg = "Niraj"
//     console.log(this);
// }

// chai()


const addTwo = (num1,num2)=>{
  return num1 + num2
}

// console.log(addTwo(4,7))

// let b = addTwo(4,5)
// console.log(b)

// Implicit return

//  curly bracket me wrap kiya to return keyword likna padega aur bracket me likhenge to nahi likna padega

// const addNum = (num1,num2) => num1+num2

//    or

// const addNum = (num1,num2) => (num1+num2)
// console.log(addNum(4,6))


(function chai(){
    console.log(`Hello Tulika`)
})()