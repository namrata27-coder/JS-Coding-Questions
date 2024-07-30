const Promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("test");
        resolve(4)
    }, 4500);
})

Promise1.then((ans)=>{
    console.log(ans,"test2")
})


