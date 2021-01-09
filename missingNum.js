//Write a function to determine which value is missing from an array of 1 to 100
let rangeArr = [...Array(101).keys()]; //build initial array, 0-100
let reducer = (a, b) => a + b; //Returns sum of accumulator and current value in an array
let checker = (a, b) => b - a.reduce(reducer); //Returns difference between actual and expected values
const expectedTotalValue = rangeArr.reduce(reducer);
const randomNum = Math.floor(Math.random() * rangeArr.length);

rangeArr.shift();//remove 0 value from start of array
rangeArr.splice(randomNum,1);//remove random number
console.log(rangeArr); //log array to show a number is missing in the range


console.log(checker(rangeArr, expectedTotalValue)); //log the number that's missing