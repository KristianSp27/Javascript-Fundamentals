function magicSum(array, number) {
  let newArray = [];

  for (let index = 0; index <= array.length; index++) {
    let sum = 0;
    for (let i = index + 1; i <= array.length; i++) {
      sum = array[Number(index)] + array[Number(i)];
      if (sum === number) {
        newArray.push([array[Number(index)], array[i]]);
      }
    }
  }
  for (const pairs of newArray) {
    console.log(pairs.join(" "));
  }
}
magicSum([1, 7, 6, 2, 19, 23], 8);
