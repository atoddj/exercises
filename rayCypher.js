//Accept a string and rearrange words so they have the last letter at the start instead of the end
//ex: I love my mom => I elov ym mmo

const encode = (str) => {
  const moveLetters = word => {
    const letters = word.split(''); //split word into array of letters
    letters.unshift(letters.pop()); //pop - remove last item of array, unshift - place argument at beginning of array
    return letters.join(''); //rejoin array of letters as a string
  };
  return str.split(' ').map(moveLetters).join(' '); //split into words, map over words with moveLetters, then rejoin into single string
}

const decode = (str) => {
  const moveLetters = word => {
    const letters = word.split('');
    letters.push(letters.shift());
    return letters.join('');
  }
  return str.split(' ').map(moveLetters).join(' ');
}
const encoded = encode('I need to start my new job asap');
const decoded = decode(encoded);
console.log(encoded);
console.log(decoded);