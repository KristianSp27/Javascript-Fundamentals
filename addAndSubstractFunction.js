function addAndSubstract(num1, num2, num3) {
  let sum = num1 + num2;
  substract(sum, num3);
  function substract(sum, num3) {
    let finalResult = sum - num3;
    console.log(finalResult);
  }
}
