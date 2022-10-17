function nxnMatrix(number) {
  let arr = [];

  for (let index = 0; index < number; index++) {
    let output = "";
    for (let j = 0; j < number; j++) {
      output += `${number} `;
    }
    arr.push(output);
  }
  console.log(arr.join(`\n`));
}
nxnMatrix(3);
