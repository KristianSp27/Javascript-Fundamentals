function revealWords(words, string) {
  string = ` ${string} `;
  let splitWords = words.split(", ");

  splitWords.forEach((word) => {
    const match = ` ${"*".repeat(word.length)} `;
    string = string.replace(match, ` ${word} `);
  });

  console.log(string.trim());
}
