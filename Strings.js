const name = "tulika"
const repoCount = 50

// Concatenation of two strings(old method)
console.log(name + repoCount)

console.log(name[0])
console.log(name.length)


// Concatenation of two strings(modern method)

console.log(`Hello my name is ${name} and my repo is ${repoCount}`)

// Another method of decleare the String


const gameName = new String('Shreya-hm')

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf('r'))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString)

const myName = "   Niraj  "
console.log(myName)
console.log(myName.trim())

const url = "https://hitesh.com/hitesh%20chaudhary"

console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))

console.log(gameName.split('-'))