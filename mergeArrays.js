function mergeArrays(array1, array2) {
  let array3 = [];
  for (let index = 0; index < array1.length; index++) {
    if (index % 2 == 0) {
      array3.push(Number(array1[index]) + Number(array2[index]));
    } else {
      array3.push(array1[index] + array2[index]);
    }
  }
  console.log(array3.join(" - "));
}
