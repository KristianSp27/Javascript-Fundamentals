function convertToObject(jsonStr) {
  const object = JSON.parse(jsonStr);
  for (let [key, value] of Object.entries(object)) {
    console.log(`${key}: ${value}`);
  }
}
