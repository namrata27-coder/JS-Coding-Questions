// const Promise1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("test");
//         resolve(4)
//     }, 4500);
// })

// Promise1.then((ans)=>{
//     console.log(ans,"test2")
// })


// // 1. Scenatio one with function async/sync
// // practice example 8

// const abc = console.log("checking if it prints")

// const myOath=()=>{
//     const myPromise = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("before resole")
//             resolve("aha")
//         }, 5000);
//     })

//     myPromise.then((res)=>console.log(res));
// }

// myOath();

// setTimeout(()=>{console.log("warner bros")},5000)


// const p1= Promise.resolve(2);

// const myPromise = new Promise((resolve, reject) => {
//     console.log("om nom nom")
//   setTimeout(() => {
//     resolve("foo");
//   }, 300);
// })

// const p2 = new Promise((resolve,reject)=>{
//     reject(99)
// })

// const p3 = Promise.resolve("ha")

// Promise.allSettled([p1,p2,p3]).then((vals)=>console.log(vals,"all vals"))


// const myPromise = new Promise((resolve,reject)=>{
//     resolve(8)
// }).then((res)=>{
//     console.log(res);
//     return 12;
// }).catch((error)=>{
//     new Error("oh no");
//     console.log(error)
//     // return 44;
// }).then((res)=>{
//     console.log(res,'after the catch block')
// }).finally((res)=>{
//     console.log(res,"in finally block")
// })


const P1= new Promise((resolve,reject)=>resolve(6));
const P2 =  Promise.reject(9);

Promise.any([P1,P2]).then((res)=>console.log(res,"****"))