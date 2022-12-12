function emailValidator(emailDetails) {
  let email = emailDetails.shift();
  let s = "";

  function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, +lookfor + replace));
  }

  for (let index = 0; index < emailDetails.length; index++) {
    const command = emailDetails[index];
    if (command === "Complete") {
      break;
    } else if (command.includes("Make Upper")) {
      email = email.toUpperCase();
      console.log(email);
    } else if (command.includes("Make Lower")) {
      email = email.toLowerCase();
      console.log(email);
    } else if (command.includes("GetDomain")) {
      let count = Number(command.slice(-1));
      console.log(email.slice(-count));
    } else if (command.includes("GetUsername")) {
      if (!email.includes("@")) {
        console.log(`The email ${email} doesn't contain the @ symbol.`);
      } else {
        let username = email.substring(0, email.indexOf("@"));
        console.log(username);
      }
    } else if (command.includes("Replace")) {
      const split = command.split(" ");
      const lookFor = split[1];
      const replaceWith = "-";
      if (email.includes(lookFor)) {
        email = replaceAll(email, lookFor, replaceWith);
        console.log(email);
      }
    } else if (command.includes("Encrypt")) {
      let splitted = email.split("");
      for (let j = 0; j < splitted.length; j++) {
        let current = splitted[j].charCodeAt();
        s += current + " ";
      }
      console.log(s);
    }
  }
}
emailValidator(["Mike123@somemail.com", "Make Upper", "GetDomain 3", "GetUsername", "Encrypt", "Complete"]);

// emailValidator(["AnotherMail.com", "Make Lower", "GetUsername", "Replace a", "Complete"]);

// emailValidator(["Another@Mail.com", "Make Lower", "GetUsername", "GetDomain 3", "Encrypt", "Complete"]);
