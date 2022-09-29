function rightPlace(first, second, third) {
  let result = first.replace("_", second);
  let output = result === third ? "Matched" : "Not Matched";
  console.log(output);
}
