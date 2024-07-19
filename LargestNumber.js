const arr = [33, 5, 122, 1, 3];
console.log(Math.max(...arr), "largest number");

const findLargest = (arr) => {
  let largestNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber
};

findLargest(arr);