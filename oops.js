// const user = {
//     username : "Niraj",
//     loginCount : 8,
//     signedIn : true,

//  Note:- This is used for current context

//     getUserDetails: function(){
//         // console.log(`Username:${this.username}`)
//         // console.log(this)
//     }
// }
// console.log(user.username)
// console.log(user.getUserDetails());

function User(Username,loginCount,isLoggedIn){
    this.Username=Username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    // return this

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }


}

const userOne = new User("Tulika",12,true)
const userTwo = new User("ChaiAurCode",16,false)

console.log(userOne)
console.log(userTwo)