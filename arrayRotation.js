function arrayRotation(array, rotations) {
  for (let index = 0; index < rotations; index++) {
    let currentNumber = array.shift();
    array.push(currentNumber);
  }
  console.log(array.join(" "));
}
