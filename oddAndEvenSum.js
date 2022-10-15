function oddAndEvenSum(number) {
  let numberAsString = number.toString();
  let oddSum = 0;
  let evenSum = 0;
  let numAsStringLength = numberAsString.length;

  for (let index = 0; index < numAsStringLength; index++) {
    let singleNum = Number(numberAsString[index]);
    if (singleNum % 2 === 0) {
      evenSum += singleNum;
    } else {
      oddSum += singleNum;
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
