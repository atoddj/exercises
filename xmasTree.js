let printTree = (numBranches) => {
  let tree = '';
  for (let index = 0; index < numBranches; index++) {
    //add whitespace and leaves(asterisks) to branches
    tree += ' '.repeat(numBranches - index - 1) + '*'.repeat((2*index) + 1) + '\n';
  }
  //replicate first line in tree for the 'trunk'
  return tree += tree.split('\n')[0]
}

console.log(printTree(10));