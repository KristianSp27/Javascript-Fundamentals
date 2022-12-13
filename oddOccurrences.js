function oddOccurrences(string) {
  let splittedString = string.split(" ").map((el) => el.toLowerCase());
  const counts = {};
  let splittedLength = splittedString.length;

  for (let index = 0; index < splittedLength; index++) {
    if (!counts.hasOwnProperty(splittedString[index])) {
      counts[splittedString[index]] = [];
    }
    counts[splittedString[index]].push(index);
  }
  let sorted = Object.entries(counts).sort((a, b) => a[1][0] - b[1][0]);
  let result = "";
  for (const element of sorted) {
    if (element[1].length % 2 !== 0) {
      result += " " + element[0];
    }
  }
  console.log(result);
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
