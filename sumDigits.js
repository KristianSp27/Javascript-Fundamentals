function sumDigits(number) {
  let num = number.toString();
  let sum = 0;

  for (let index = 0; index < num.length; index++) {
    sum += parseInt(num.charAt(index), 10);
  }
  console.log(sum);
}
