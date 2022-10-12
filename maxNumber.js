function maxNumber(array) {
  let newArr = [];

  for (let index = 0; index < array.length; index++) {
    let isBigger = true;
    let currentNumber = array[index];

    for (let i = index + 1; i < array.length; i++) {
      if (currentNumber <= array[i]) {
        isBigger = false;
      }
    }
    if (isBigger) {
      newArr.push(currentNumber);
    }
  }
  console.log(newArr.join(" "));
}
