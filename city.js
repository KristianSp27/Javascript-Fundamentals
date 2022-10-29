function city(input) {
  let entries = Object.entries(input);
  for (let [key, value] of entries) {
    console.log(`${key} -> ${value}`);
  }
}
