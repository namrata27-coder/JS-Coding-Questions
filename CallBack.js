// const myState = () => {
//   return console.log("looking forward to a painless death");
// };

// const myKill=(callBack,name)=>{
//     console.log(name);
//     return callBack();
// }

// myKill(myState,"namrata");


const makeCake=()=>{
  return console.log("get receipe");
 }

 const getIngredients=(callBack,name)=>{
  callBack();
  return name;
 }


 getIngredients(makeCake,"namrata");