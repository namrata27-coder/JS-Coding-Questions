// y=3;
// console.log(y)
// var y;

// var a= 7;
// function hoist(){
//     a= 9;
//     // return;

//     function a(){}
// }
// hoist();

// console.log(a,"value of a");

// const x= 9;
// myval();
// function myval(){
//     console.log(x);
// }

// function WithoutClose() {
//   for (var i = 0; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000 * i);
//   }
// }

// WithoutClose();

function WithClose() {
  for (var i = 0; i < 5; i++) {
    function Close(i) {
      setTimeout(() => {
        console.log(i);
      }, 1000 * i);
    }
    Close(i);
  }
}

WithClose();

const testIt= function(what){
    return console.log("henlo" + this.name+what)
}


testIt.call({name:"nams"},"hehe")



// const sum =(a)=>{
//     return (b)=>{
//         return a+b;
//     }
// }