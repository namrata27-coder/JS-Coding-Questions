console.log("sorting array of objects without using inbuilt method");


// take this array of objects

const employees =[{id:"12a",name:"John doe",age:25},
    {id:"23a",name:"Ann martin",age:26},
    {id:"23a",name:"Ann A",age:26}
]


const sortElement=(arr,key)=>{
   return [...arr].sort((a,b)=>{
        if(a[key]<b[key]){
            return -1
        }

        if(a[key]>b[key]){
            return 1
        }

        return 0;
    })

}

console.log("Sorted array: ",sortElement(employees,"name"));


// arr = [5, 2, 7, 1, 0]

// function bubbleSort(arr){
//     for (let i = 0; i < arr.length - 1; i++){

//         let swapped = false

//         for (let j = 0; j < arr.length - i - 1; j++){
//             // swapping the elements
//             if (arr[j] > arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//                 swapped = true
//             }
//         }

//         // if no elements are swapped
//         // that means our array is sorted
//         if(!swapped) break;
//     }

//     return arr
// }

// console.log("Before sorting: ", arr)
// console.log("After sorting: ", bubbleSort(arr))

function MyTest(name,age){
    this.name = name;
    this.age = age
}

const myObj = new MyTest("namrata",28);

