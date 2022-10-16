function loadingBar(number) {
  let percentCounter = "%".repeat(number / 10);
  let dotCounter = ".".repeat(10 - number / 10);

  if (number === 100) {
    console.log("100% Complete!");
  } else if (number < 100) {
    console.log(`${number}% [${percentCounter}${dotCounter}] `);
    console.log(`Still loading...`);
  }
}
