const checkPalindrom = (val) => {
  let reverseVal = val.split("").reverse().join("");
  if (val === reverseVal) {
    console.log("Yup, it's palindrome");
  }
};

checkPalindrom("SOS");



const CustomFunctionPalindrome=(value)=>{
    console.log("getting here")
    for(let i=0;i<value.length;i++){
        for(let j=value.length;j>0;j--){
            if(value[i]===value[j]){
                console.log("matched",i,j)
            }
        }
    }
}


let stringVal = "SOS";
CustomFunctionPalindrome(stringVal.split(""))