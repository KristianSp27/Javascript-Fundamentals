function heroRecruitment(arrayOfCommands) {
  const hero = {};
  for (let index = 0; index < arrayOfCommands.length; index++) {
    let commandString = arrayOfCommands[index];

    if (commandString === "End") {
      console.log(`Heroes:`);
      Object.entries(hero).forEach(([hero, spellbook]) => {
        console.log(`== ${hero}: ${spellbook.join(", ").trim()}`);
      });
      break;
    }
    let commandStringSplitted = commandString.split(" ");
    let command = commandStringSplitted.shift();

    const name = commandStringSplitted[0];
    const spell = commandStringSplitted[1];
    switch (command) {
      case "Enroll":
        if (hero.hasOwnProperty(name)) {
          console.log(`${name} is already enrolled.`);
        } else {
          hero[name] = [];
        }
        break;
      case "Learn":
        if (!hero.hasOwnProperty(name)) {
          console.log(`${name} doesn't exist.`);
        } else if (hero[name].includes(spell)) {
          console.log(`${name} has already learnt ${spell}.`);
        } else {
          hero[name].push(spell);
        }
        break;
      case "Unlearn":
        if (!hero.hasOwnProperty(name)) {
          console.log(`${name} doesn't exist.`);
        } else if (!hero[name].includes(spell)) {
          console.log(`${name} doesn't know ${spell}.`);
        } else {
          let index = hero[name].indexOf(spell);
          hero[name].splice(index, 1);
        }
        break;
      default:
        break;
    }
  }
}
heroRecruitment([
  "Enroll Stefan",
  "Enroll Peter",
  "Enroll Stefan",
  "Learn Stefan ItShouldWork",
  "Learn John ItShouldNotWork",
  "Unlearn George Dispel",
  "Unlearn Stefan ItShouldWork",
  "End",
]);
heroRecruitment(["Enroll Stefan", "Learn Stefan ItShouldWork", "Learn Stefan ItShouldWork", "Unlearn Stefan NotFound", "End"]);
heroRecruitment(["Enroll Stefan", "Enroll Peter", "Enroll John", "Learn Stefan Spell", "Learn Peter Dispel", "End"]);
