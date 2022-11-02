function houseParty(array) {
  let resultArray = [];

  for (let index = 0; index < array.length; index++) {
    let nameSplitter = array[index].split(" ");
    let splittedName = nameSplitter[0];
    if (!array[index].includes("not")) {
      if (resultArray.includes(splittedName)) {
        console.log(`${splittedName} is already in the list!`);
      } else {
        resultArray.push(splittedName);
      }
    }
    if (array[index].includes("not") && !resultArray.includes(splittedName)) {
      console.log(`${splittedName} is not in the list!`);
    }
    if (array[index].includes("not") && resultArray.includes(splittedName)) {
      resultArray.pop(splittedName);
    }
  }
  console.log(resultArray.join("\n"));
}
houseParty(["Tom is going!", "Annie is going!", "Tom is going!", "Garry is going!", "Jerry is going!"]);
// let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
