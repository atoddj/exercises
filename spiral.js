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

  //while matrix.length > 0 
  while (matrix.length > 0) {

    if (matrix.length === 1) {
      arr.push(matrix);
      break;
    }

    //push top row to arr and remove top row
    let topRow = matrix.shift();
    arr.push(topRow);

    //push right column and remove right column
    matrix.forEach(el => {
      let right = el.pop(); //pop removes last element from array and then stores it in 'right'
      arr.push(right);
    });
    
    //push bottom (reverse) and remove bottom row
    let bottom = matrix.pop().reverse(); //remove last row from matrix, reverses it, then stores it in 'bottom'
    arr.push(bottom);

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