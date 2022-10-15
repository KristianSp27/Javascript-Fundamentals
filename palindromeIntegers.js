function palindromeIntegers(array) {
  for (let index = 0; index < array.length; index++) {
    let numberAsString = array[index].toString();
    let reversedString = numberAsString.split("").reverse().join("");
    if (numberAsString === reversedString) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}
