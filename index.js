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

  // Check elements in arr1 that are not in arr2
  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      newArr.push(arr1[i]);
    }
  }

  // Check elements in arr2 that are not in arr1
  for (let j = 0; j < arr2.length; j++) {
    let found = false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr2[j] === arr1[i]) {
        found = true;
        break;
      }
    }
    if (!found) {
      newArr.push(arr2[j]);
    }
  }

  return newArr;
}

//console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// console.log(
//   diffArray(
//     ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
//     ["diorite", "andesite", "grass", "dirt", "dead shrub"]
//   )
// );
function diffArray(arr1, arr2) {
  // Combine both arrays into a single array
  const combinedArr = arr1.concat(arr2);

  const newArr = [];

  // Check for elements in combinedArr that are not repeated (unique elements)
  for (let i = 0; i < combinedArr.length; i++) {
    if (
      combinedArr.indexOf(combinedArr[i]) ===
      combinedArr.lastIndexOf(combinedArr[i])
    ) {
      newArr.push(combinedArr[i]);
    }
  }

  return newArr;
}

//console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
function destroyer(arr, ...a) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (a.includes(arr[i])) {
      continue;
    }
    newArr.push(arr[i]);
  }
  return newArr;
}
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
function whatIsInAName(collection, source) {
  const newArr = [];

  for (let i = 0; i < collection.length; i++) {
    if (JSON.stringify(collection[i]) === JSON.stringify(source)) {
      console.log(collection[i]);
    }
  }
  return newArr;
}
console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);
// console.log(
//   whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
//     apple: 1,
//   })
// );
