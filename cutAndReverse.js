function cutAndReverse(string) {
  let arrayOfString = [...string];
  let firstHalf = arrayOfString.slice(0, arrayOfString.length / 2);
  let secondHalf = arrayOfString.slice(arrayOfString.length / 2);
  console.log(firstHalf.reverse().join(""));
  console.log(secondHalf.reverse().join(""));
}
