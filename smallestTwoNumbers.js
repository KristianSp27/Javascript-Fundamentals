function smallestTwoNumbers(array) {
  let sortedArray = array.sort((a, b) => {
    return a - b;
  });
  let resultArray = sortedArray.slice(0, 2);
  console.log(resultArray.join(" "));
}
smallestTwoNumbers([30, 15, 50, 5]);
