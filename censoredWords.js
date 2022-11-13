function censoredWords(text, singleWord) {
  while (text.includes(singleWord)) {
    text = text.replace(singleWord, "*".repeat(singleWord.length));
  }
  console.log(text);
}
