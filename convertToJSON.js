function convertToJSON(name, lastName, hairColor) {
  let newObject = {
    name,
    lastName,
    hairColor,
  };
  console.log(JSON.stringify(newObject));
}
