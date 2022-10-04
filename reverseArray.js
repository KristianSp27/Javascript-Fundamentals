function reverseArray(counter, numbers) {
  let array = [];

  for (let i = counter - 1; i >= 0; i--) {
    array.push(numbers[i]);
  }

  console.log(array.join(" "));
}

