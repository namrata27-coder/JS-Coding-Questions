// function Parent(){
//     const a= 10;
//     function Child(){
//         console.log(a)
//     }
//     return Child;   
// }

// const res = Parent();
// console.log(res,"output",res())

// function Counter(){
//     let count = 0;

//     function InnerCount(){
//         count++;
//         console.log(count,"count");
//     }
//     return InnerCount;
// }


// let increment = Counter();

// console.log(increment(),"output")

// function Outer(){
//     var x = "not me "
//     const inner=()=>{
//         console.log(x)
//     }
//     var x=22;
//     return inner();
// }

// console.log(Outer(),"Outer()")


// for(let i=0;i<=5;i++){
//     setTimeout(()=>{
//         console.log(i,"print")
//     },6000)
// }

// const myInterval=(i)=>{
//     setTimeout(()=>{
//         console.log(i)
//     },6000)
// }

// myInterval(6)