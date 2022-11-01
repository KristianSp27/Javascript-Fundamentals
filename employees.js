function employees(array) {
  let employeeList = {};

  array.forEach((person) => {
    console.log(`Name: ${person} -- Personal Number: ${person.length}`);
  });
}
employees(["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"]);
