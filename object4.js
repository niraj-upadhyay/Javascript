// function multiplyBy5(num){
//     return num*5
// }

// multiplyBy5.power=2

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}

const chai = new createUser("chai",15)
const tea = new createUser("chai",25)
chai.printMe()