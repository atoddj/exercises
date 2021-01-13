//Problem: given a matrix of dimensions n*n, read the numbers in a spiral pattern.
// i.e.: start at array[0][0] and read the top row, right column, bottom row in reverse, then up the left column 

/*
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
] 
=> 1,2,3,6,9,8,7,4,5  */

const build2d = num => {
  let arr = [];
  let rowArr = [];
  for (let i = 1; i < (num*num)+1; i++) {
    rowArr.push(i);
    if (rowArr.length === num) {
      arr.push(rowArr);
      console.log(rowArr);
      rowArr = [];
    }
  }
  return arr;
}

const spiral = num => {
  let matrix = build2d(num);
  let arr = [];

  while (matrix.length > 0) {

    if (matrix.length === 1) {
      arr.push(matrix);
      break;
    }

    //push top row to arr and remove top row from input
    arr.push(matrix.shift());

    //push right column into arr and remove right column from input
    matrix.forEach(el => {
      arr.push(el.pop());
    });
    
    //push bottom (reverse) and remove bottom row from input
    arr.push(matrix.pop().reverse());

    //store left column items in array and push them in reverse order to arr
    let left = []
    matrix.forEach(el => {
      left.push(el.shift());
    })
    arr.push(left.reverse());
  }

  return arr.toString();
}

console.log(spiral(5))