function firstAndLastK(array) {
  let k = Number(array.shift());
  console.log(array.slice(0, k).join(" "));
  console.log(array.slice(array.length - k).join(" "));
}
firstAndLastK([2, 7, 8, 9]);
