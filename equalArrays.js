function equalArrays(array1, array2) {
  let sum = 0;
  let areEqual = true;

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      console.log(`Arrays are not identical. Found difference at ${index} index`);
      areEqual = false;
      break;
    } else {
      sum += Number(array1[index]);
    }
  }
  if (areEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}
equalArrays(["10", "20", "30"], ["10", "20", "30"]);
