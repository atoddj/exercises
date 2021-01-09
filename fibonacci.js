//function to take number of elements as argument and return array of fibonacci sequence of that size

const fibonacci = a => {
  let series = [0, 1];
  for (let i = 2; i < a; i++) {
    series.push(series[i-2] + series[i-1]);
  }
  return series;
}

console.log(
  fibonacci(50)
);