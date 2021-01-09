let a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const compareArr = (arr1, arr2) => {
  return arr1.reduce((a, b) => (
    [...a, arr2.indexOf(b) > -1 ? b : undefined]
  ), []);
}

console.log(
  compareArr(a, b)
);