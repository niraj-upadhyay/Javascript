const coding = ["js", "ruby","java","python","cpp"]

// coding.forEach(function (val){
//   console.log(val)
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printme(goods){
//     console.log(goods)
// }
// coding.forEach(printme)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })


// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName : "js"
//     },
//     {
//         languageName: "java",
//         languageFileName : "python"
//     },
//     {
//         languageName: "typescript",
//         languageFileName : "jquery"
//     },
// ]
// myCoding.forEach((tulika)=>{
//  console.log(tulika.languageName)
// })


// ++++++++++++ For Each Loop ++++++++++++

// const values = coding.forEach((item)=>{
//   console.log(item)
// })
// console.log(values)

// For each not return the value

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num)=>num>4)
// console.log(newNums)



// const newNums = myNums.filter((num)=>{
//     return num > 4
// })
// console.log(newNums)

// Map function

// const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNumbers.map((num)=>num+10)
// console.log(newNums)

// chaining

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers
//                    .map((num)=>num*10)
//                    .map((num)=>num+1)
//                    .filter((num)=>num>=40)
    
//     console.log(newNums);

    // Reduce

    const myNums = [1,2,3]
    // const myTotal = myNums.reduce(function(acc,currval){
    //     console.log(`acc : ${acc} and currval: ${currval}`);
    //     return acc + currval
    // },0)

    // const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)

    // console.log(myTotal)

    const shoppingCart = [
        {
            itemName: "js course",
            price: 2999
        },
        {
            itemName: "py course",
            price: 999
        },
        {
            itemName: "mb course",
            price: 2999
        },
        {
            itemName: "App course",
            price: 2199
        },
        {
            itemName: "jq course",
            price: 2929
        }
    ]
    const priceTopay = shoppingCart.reduce((acc,item)=> acc+item.price,0)
    console.log(priceTopay)






