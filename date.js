//  Date


let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())

// let myCreateDate = new Date(2023, 4 , 24)
// console.log(myCreateDate.toDateString())
// console.log(myCreateDate.toLocaleString())

let myCreateDate1 = new Date("2023-12-07") // yy-mm-dd
// console.log(myCreateDate1.toLocaleString())

let myCreateDate = new Date("07-12-2023") // dd-mm-yy
// console.log(myCreateDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.toLocaleString())
console.log(newDate.getMonth()+1)
console.log(newDate.getDate())



