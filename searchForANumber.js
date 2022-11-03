function searchForANumber(array1, array2) {
  let quantity = Number(array2.shift());
  let forDeletion = Number(array2.shift());
  let searchedNumber = Number(array2.shift());
  let appearances = 0;

  let takenNumbers = array1.slice(0, quantity);
  takenNumbers.splice(0, forDeletion);

  for (const number of takenNumbers) {
    if (number === searchedNumber) {
      appearances++;
    }
  }
  console.log(`Number ${searchedNumber} occurs ${appearances} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
