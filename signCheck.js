function signCheck(numOne, numTwo, numThree) {
  let product;
  if (numOne > 0 && numTwo > 0 && numThree > 0) {
    // +++
    product = "Positive";
  } else if (numOne < 0 && numTwo < 0 && numThree < 0) {
    // ---
    product = "Negative";
  } else if (numOne < 0 && numTwo > 0 && numThree > 0) {
    // -++
    product = "Negative";
  } else if (numOne > 0 && numTwo > 0 && numThree < 0) {
    // ++-
    product = "Negative";
  } else if (numOne < 0 && numTwo < 0 && numThree > 0) {
    // --+
    product = "Positive";
  } else if (numOne < 0 && numTwo > 0 && numThree < 0) {
    // - + -
    product = "Negative";
  } else if (numOne > 0 && numTwo < 0 && numThree > 0) {
    // + - +
    product = "Negative";
  } else if (numOne > 0 && numTwo < 0 && numThree < 0) {
    // +--
    product = "Positive";
  }
  console.log(product);
}
