function train(array) {
  let passengersInTrain = array.shift().split(" ").map(Number);
  let maxCapacity = Number(array.shift());

  for (let index = 0; index < array.length; index++) {
    let currentCommand = array[index].split(" ");

    if (currentCommand[0] === "Add") {
      let newWagonPassengers = Number(currentCommand[1]);
      passengersInTrain.push(newWagonPassengers);
    } else {
      for (let j = 0; j < passengersInTrain.length; j++) {
        let currentPassengers = passengersInTrain[j];
        if (currentPassengers + Number(currentCommand[0]) <= maxCapacity) {
          passengersInTrain[j] += Number(currentCommand[0]);
          break;
        }
      }
    }
  }
  console.log(passengersInTrain.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
