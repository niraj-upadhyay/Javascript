class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}
const chai = new Teacher("chai", "chai@gmail.com", "1234");
chai.addCourse();


const masalachai = new User("masalachai")
masalachai.logMe()

console.log(chai instanceof Teacher)
console.log(chai instanceof User)
console.log(Teacher instanceof User)
console.log(masalachai instanceof User)


