function messageTranslator(messagesToTranslate) {
  const checkIfIsValidCommand = (string) => {
    const regEx = /![A-Z][a-z]{3,}!:\[[a-zA-Z]{8,}\]/;
    const isValid = new RegExp(regEx, "gm").test(string);
    return isValid;
  };
  const numberOfInputs = parseInt(messagesToTranslate.shift(), 10);
  for (let index = 0; index < numberOfInputs; index++) {
    const command = messagesToTranslate[index];
    if (!checkIfIsValidCommand(command)) {
      console.log("The message is invalid");
    } else {
      const commandName = command
        .split(":")[0]
        .match(/[A-Z][a-z]{3,}/g)
        .join("");
      const stringToTranslate = command.split(":")[1];
      const letters = stringToTranslate.match(/[a-zA-Z]/g);
      const asciiNumbers = letters.map((letter) => letter.charCodeAt(0));

      const result = `${commandName}: ${asciiNumbers.join(" ")}`;
      console.log(result);
    }
  }
}
// messageTranslator(["2", "!Send!:[IvanisHere]", "*Time@:[Itis5amAlready"]);
messageTranslator(["3", "go:[outside]", "!drive!:YourCarToACarWash", "!Watch!:[LordofTheRings]"]);

const mYCoolObject = {
  $HeroName: ["Spells", "s", "sada"],
};

// myCoolObject.hasOwnProperty("$HeroName");
// myCoolObject["$HeroName"] = [];
// myCoolObject["$HeroName"].push("Spells");
// speelbook = myCoolObject["$HeroName"];
// check if a spell existts in the spellbook
// if (speelbook.includes("s")) {
