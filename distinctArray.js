function distinctArray(array) {
  console.log(array.filter((item, index) => array.indexOf(item) === index).join(" "));
}
