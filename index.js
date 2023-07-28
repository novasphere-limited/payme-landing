// console.log("hello world!");
function calculateSum(num1, num2) {
  return num1 + num2;
}

const result = calculateSum(10, 5);

function sumAllDes(arr) {
  let first = arr[0];
  let last = arr[1];
  let total = 0;
  if (first > arr[1]) {
    for (let i = last; i <= first; i++) {
      total += i;
    }
  }
  return total;
}
// console.log(sumAllDes([10, 5]));
function sumAllAsc(arr) {
  let first = arr[0];
  let last = arr[1];
  let total = 0;
  if (first < last) {
    for (let i = first; i <= last; i++) {
      total += i;
    }
  }
  return total;
}
// console.log(sumAllAsc([1, 4]));
// console.log("Hello world!");
function diffArray(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if ((arr1[i] = arr2[j])) continue;
      else newArr.push(arr1[i]);
    }
    return newArr;
  }
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
