function stringSubstring(word, sentence) {
  let lowerCase = sentence.toLowerCase();
  let array = lowerCase.split(" ");
  for (const token of array) {
    if (word === token) {
      console.log(token);
      return;
    }
  }
  console.log(`${word} not found!`);
}
