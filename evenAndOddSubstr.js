function solve(array) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let index = 0; index < array.length; index++) {
    array[index] = Number(array[index]);
  }
  for (let num of array) {
    if (num % 2 == 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }
  console.log(sumEven - sumOdd);
}
