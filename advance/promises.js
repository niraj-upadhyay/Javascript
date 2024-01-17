// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promises consumed");
// })

// Second Method

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Asynyc task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 is resolved");
// })

// const promisesThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username:"chai",email:"chai@example.com"})
//     },1000)
// })

// promisesThree.then(function(user){
//     console.log(user)
// })


const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Niraj", password: "1234" });
    } else {
      reject("Error: Something went Wrong");
    }
  }, 1000);
});


promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  }).finally(()=>console.log("Finally the promises is resolved or rejected"))


  const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let error = true;
      if (!error) {
        resolve({ username: "Javascript", password: "12345" });
      } else {
        reject("Error: Js went Wrong");
      }
    }, 1000);
  });

  async function consumePromiseFive(){
    try{
      const response = await promiseFive
      console.log(response);
    }catch(error){
      console.log(error)
    }
  }

  consumePromiseFive()

  async function getAllUser(){
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      console.log(data)
    }catch (error){
      console.log("E ", error)
    }
  }

  getAllUser()

  // async function getAllUser() {
  //   try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //     const data = await response.json();
      
  //     // Do something with the data
  //     console.log(data);
  
  //     // Return the data if needed
  //     return data;
  //   } catch (error) {
  //     console.log("Error: ", error);
  //   }
  // }
  
  // // Call the function and use the returned data
  // getAllUser().then(data => {
  //   // Do something with the data if needed
  //   console.log("Returned data: ", data);
  // });

  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>{
    return response.json()
  })
  .then((data)=>{
    console.log(data)
  })
  .catch((error)=>console.log(error))
  