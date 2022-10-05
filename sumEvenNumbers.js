function sumEvenNumbers(input) {
  let sum = 0;
  for (let index = 0; index < input.length; index++) {
    input[index] = Number(input[index]);
  }
  for (let num of input) {
    if (num % 2 == 0) {
      sum += num;
    }
  }
  console.log(sum);
}
sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
