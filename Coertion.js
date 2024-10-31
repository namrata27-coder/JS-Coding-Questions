// console.log("type");
// console.log(false && "false");
// console.log('2'* '3');
// console.log(6 / '3');
// console.log(- false)
// console.log(null == undefined)
// console.log(null>=0)
// console.log(undefined>=0)
// console.log(undefined==null)

// console.log(NaN + 333)

// const myContainer={
//     h:10,
//     w:2,
//     valueOf: function(){
//         return this.h * this.w
//     }
// }

// console.log(myContainer +10);
// console.log(-10 - 'jjhjhj')
// console.log(1===true)

const add=(a)=>{
    return (b)=>{
        return a+b;
    }
}

console.log(add(6)(10));