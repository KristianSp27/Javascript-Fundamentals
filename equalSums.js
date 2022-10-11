function equalSums(initialArray) {
  let foundIndex = "no";
  let arrayLength = initialArray.length;

  for (let i = 0; i < arrayLength; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let l = 0; l < i; l++) {
      leftSum = leftSum + initialArray[l];
    }
    for (let r = i + 1; r < arrayLength; r++) {
      rightSum = rightSum + initialArray[r];
    }
    if (leftSum === rightSum) {
      foundIndex = i;
    }
  }
  console.log(foundIndex);
}
