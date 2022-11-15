function pascalCaseSplitter(string) {
  let separatedString = string.split(/(?=[A-Z])/);
  console.log(separatedString.join(", "));
}
