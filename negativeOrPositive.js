function negativeOrPositive(array) {
  let newArray = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] < 0) {
      newArray.unshift(array[index]);
    } else {
      newArray.push(array[index]);
    }
  }
  console.log(newArray.join("\n"));
}
