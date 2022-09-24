function multiplicationTable(number) {
  for (let index = 1; index <= number; index++) {
    let row = "";
    for (let j = 1; j <= index; j++) {
      row += `${index} `;
    }
    console.log(row);
  }
}
