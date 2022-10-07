function repeatString(string, counter) {
  let str = "";
  for (let index = 0; index < counter; index++) {
    str += string;
  }
  console.log(str);
}
repeatString("abc", 3);
