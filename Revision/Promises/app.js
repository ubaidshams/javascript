// // let promise = new Promise((resolve, reject) => {
// //   let isRoomCleaned = false;
// //   if (isRoomCleaned) {
// //     resolve("Room has been cleaned Thank you");
// //   } else {
// //     reject("No the room is not yet cleaned please inform the aunt");
// //   }
// // });
// // console.log(promise);

// // promise
// //   .then(cleaned => {
// //     console.log(cleaned);
// //     document.write(cleaned);
// //   })

// //   .catch(err => {
// //     console.log(err);
// //     document.write(err);
// //   })
// //   .finally(_ => {
// //     console.log("settled");
// //   });

// // Promises using async function
// // let checkMail = () => {
// //   return new Promise((resolve, reject) => {
// //     if (Math.random() > 0.5) {
// //       resolve(`Mail has arrived`);
// //     } else {
// //       reject(`Something went wrong`);
// //     }
// //   });
// // };

// // checkMail()
// //   .then(mail => {
// //     console.log(mail);
// //   })
// //   .catch(err => {
// //     console.log(err);
// //   })
// //   .finally(_ => {
// //     console.log(`Mail has been sent`);
// //   });

// // Promise using setTimmeout

// // let promise = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve(`I am first`);
// //   }, 10000);
// //   setTimeout(() => {
// //     reject(`oops i am late`);
// //   }, 5000);
// // });
// // console.log(promise);

// // promise
// //   .then(data => {
// //     console.log(data);
// //     console.log(promise);
// //   })
// //   .catch(err => {
// //     console.log(err);
// //     console.log(promise);
// //   });

// // Multiple promises using static methods

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(`I am Promise1 success block`);
//   }, 1000);
// });
// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(`I am Promise2 success block`);
//   }, 1000);
// });
// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(`I am Promise3 success block`);
//   }, 1000);
// });
// let promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(`I am Promise4 reject block`);
//   }, 1000);
// });
// let promise5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(`I am Promise5 reject block`);
//   }, 1000);
// });

// Promise.all([promise1, promise2, promise3, promise4, promise5])
//   .then(value => {
//     console.log(value);
//   })
//   .catch(err => {
//     console.log(err);
//   });

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Go for lunch 1`);
  }, 6000);
  setTimeout(() => {
    reject(`Complete the promise and then go for lunch 1`);
  }, 2000);
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Go for lunch 2`);
  }, 1000);
  setTimeout(() => {
    reject(`Complete the promise and then go for lunch 2`);
  }, 2000);
});
let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Go for lunch 3`);
  }, 1000);
  setTimeout(() => {
    reject(`Complete the promise and then go for lunch 3`);
  }, 2000);
});

Promise.resolve([promise1, promise2, promise3])
  .then(lunch => {
    console.log(lunch);
  })
  .catch(err => {
    console.log(err);
  });
