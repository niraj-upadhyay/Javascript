// singleton


// object litral (In object Key and value are there)

const mySym = Symbol("key1")

const JsUser = {
    name: "Tulika",
    "full name" : "TulikaSen Gupta",
    [mySym]: "mykey1",
    age : 18,
    location: "Ranchi",
    email : "tulikasen@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["monday", "saturday"]
}

// Asscess the object

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

// JsUser.email = "tulika@chatgpt.com"
// object.freeze(JsUser)
// JsUser.email = "tulikasengupta@gmail.com"
// console.log(JsUser);

JsUser.email = "niraj@chatgpt"
// Object.freeze(JsUser)
JsUser.email = "tulikasengupta@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user")
}

JsUser.greetingtwo = function(){
    console.log(`Hello js userji ${this.name}`);
}


console.log(JsUser.greeting())
console.log(JsUser.greetingtwo())