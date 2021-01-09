//Function should take a string argument and return which letter was used the most

const maxChar = (str) => {
  const cleanArr = str.replace(/\W/g, '').toLowerCase().split('');
  let countsObj = cleanArr.reduce((a, b) => ({...a, [b]: a[b] + 1 || 1}), {});
  return Object.keys(countsObj).reduce((a,b) => countsObj[a] > countsObj[b] ? a : b);
}

console.log(maxChar('Hello World!'));