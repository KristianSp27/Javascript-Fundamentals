function sumFirstLast(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    let firstNum = array[0];
    let lastNum = array[array.length - 1];
    sum = Number(firstNum) + Number(lastNum);
  }
  console.log(sum);
}
