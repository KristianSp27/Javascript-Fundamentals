function sorting(array) {
  let newArray = array.sort((a, b) => a - b);
  let finalArray = [];

  for (let i = 0; i < newArray.length; i++) {
    let firstNumber = newArray.pop();
    let lastNumber = newArray.shift();
    finalArray.push(firstNumber);
    finalArray.push(lastNumber);
  }
  finalArray.push(newArray.pop());
  finalArray.push(newArray.shift());
  console.log(finalArray.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
