function printAndSum(start, end) {
  let sum = 0;
  let space = "";
  for (let index = start; index <= end; index++) {
    sum += index;
    space += `${index} `;
  }
  console.log(space);
  console.log(`Sum: ${sum}`);
}
