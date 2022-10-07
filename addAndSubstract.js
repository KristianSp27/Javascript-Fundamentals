function addAndSubstract(input) {
  let newArray = [];
  let inputArraySum = 0;
  let newArraySum = 0;
  let inputLength = input.length;

  for (let index = 0; index < input.length; index++) {
    let currentNumber = input[index];

    let odd = currentNumber - index;
    let even = currentNumber + index;

    if (currentNumber % 2 === 0) {
      newArray.push(even);
    } else {
      newArray.push(odd);
    }
    inputArraySum += currentNumber;
    newArraySum += newArray[index];
  }
  console.log(newArray);
  console.log(inputArraySum);
  console.log(newArraySum);
}
