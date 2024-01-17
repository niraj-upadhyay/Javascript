// const tinderUser = new object()



const tinderUser ={}
tinderUser.id = "1234abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "satya",
            lastname : "chaudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)


const obj1 = {1: "a", 2: "b"}
const obj2 = {4: "a", 5: "b"}
const obj4 = {6: "a", 7: "b"}

const obj7 = Object.assign({},obj1,obj2)
// console.log(obj7)

const obj8 = {...obj1,...obj2}
// console.log(obj8)

const users = [
    {
        id : 1,
        email: "n@gmail.com"
    },
    {
        id : 2,
        email: "t@gmail.com"
    }

]

users[1].email

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))


// console.log(tinderUser.hasOwnproperty('isLogged'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Tulika"

}


//  For printing the value
console.log(course.coursename)

// New method for printing the value (Destructure of the value)

const {courseInstructor:instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// API (JSON format)

// {
//     "name":"Niraj",
//     "coursename":"js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}
]