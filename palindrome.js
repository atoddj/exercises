//Function to check if a string is a palindrome

String.prototype.reverse = function() {
  return this.split("").reverse().join("");
}

const isPalindrome = (str) => {
  const stripped = str.replace(/\W/g, '').toLowerCase();//replaces all non-word characters(\W) with empty string
  return stripped === stripped.reverse();
}

console.log(
  isPalindrome('Cigar? Toss it in a can. It is so tragic') //true
);
console.log(
  isPalindrome('test') //false
);
console.log(
  isPalindrome('nurses run') //true
);
