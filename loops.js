//  For
// for(let index =0; index<=10; index++){
//  const element = index;
//  console.log(element);
// }

// for(let i=0; i<=10; i++){
//  const element = i;
//  if(element==5){
//     console.log("5 is the best number")
//  }
//  console.log(element)
// }

// let myArray = ["flash","batman","superman"]
// console.log(myArray.length)
// for(let index=0; index<myArray.length;index++){
//     const element = myArray[index]
//     console.log(element)
// }

// for(let i=1; i<=10; i++){
//     console.log(`outer loop value:${i}`);
//     for(let j=0; j<=10; j++){
//         console.log(i + `*` + j + `=` + i*j)
//     }
// }

// break and continue

// for(let i=1;i<=10;i++){
//     if(i==5){
//         console.log("Deacted 5")
//         break
//     }
//     console.log(`value of i is ${i}`)

// }

// continue

// for(let i=1;i<=10;i++){
//     if(i==5){
//         console.log("Deacted 5")
//         continue
//     }
//     console.log(`value of i is ${i}`)

// }

// While loop


// let index=0
// while(index<=10){
//     console.log(`value of index is ${index}`)
//     index=index+2
// }
      
    //   While loop

// let myArray = ['flash', 'batman', 'superman']
// let arr =0
// while(arr<myArray.length){
//     console.log(`value is ${myArray[arr]}`)
//     arr=arr+1
// }
    
//  do while loop
let score =1

// do{
//     console.log(`score is ${score}`)
//     score++
// }while(score<=10);

// For of loop

const arr = [1,2,3,4,5]

for(const i of arr){
    console.log(i)
}

const greeting = "Hello world!"
for(const greet of greeting){
    console.log(`Each char is ${greet}`)
}

//  Map

const map = new Map()
map.set('IN', "India")
map.set('USA', "united States of America")
map.set('Fr',"France")
map.set('IN', "India")

// console.log(map)

for(const [key,value] of map){
    console.log(key, ':-', value)
}

// for of loop not work in object , so we use for in loop

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift:"swift by apple"
}
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
