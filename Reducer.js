console.log('reducing stuffs here');

const arr = [1,2,4,5,33];

const res = arr.reduce((acc,curr,currIndex,array)=>{
    console.log("acc->",acc,"curr->",curr,"index->",currIndex,"array->",array)
    return acc = [...acc,curr*2];
},[]);

console.log(res,'res')


const scenario1=[{id:1,value:22},{id:2,value:12},{id:3,value:92},{id:4,value:10}]

const res1=scenario1.reduce((acc,curr)=>acc=[...acc,curr.id],[]);
console.log(res1,"11");


const data = [{id:1,type:"dev"},{id:2,type:"dev"},{id:3,type:"manager"},{id:4,type:"manager"}]

data.reduce((acc,curr)=>{
    const oneType = curr[type]
    const value=[];
    if(oneType===curr.type){
        value={...acc,oneType:curr}
    }
},[])