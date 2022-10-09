function commonElements(array1, array2) {
  for (let index = 0; index < array1.length; index++) {
    let currentArrayElement = array1[index];

    for (let index = 0; index < array2.length; index++) {
      let array2Element = array2[index];
      if (currentArrayElement === array2Element) {
        console.log(array2Element);
      }
    }
  }
}
commonElements(["Hey", "hello", 2, 4, "Peter", "e"], ["Petar", 10, "hey", 4, "hello", "2"]);
