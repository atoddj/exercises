const build2d = num => {
  let arr = [];
  let rowArr = [];
  for (let i = 1; i < (num*num)+1; i++) {
    rowArr.push(i);
    if (rowArr.length === num) {
      arr.push(rowArr);
      rowArr = [];
    }
  }
  return arr;
}

const spiral = num => {
  const matrix = build2d(num);

  matrix.forEach(element => console.log(element))
}

spiral(3);