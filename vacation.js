function vacation(group, type, dayOfTheWeek) {
  let price = 0;

  if (type === "Students") {
    switch (dayOfTheWeek) {
      case "Friday":
        price = group * 8.45;
        break;
      case "Saturday":
        price = group * 9.8;
        break;
      case "Sunday":
        price = group * 10.46;
        break;
    }
    if (group >= 30) {
      price = price - price * 0.15;
    }
  } else if (type === "Business") {
    if (group >= 100) {
      group -= 10;
    }
    switch (dayOfTheWeek) {
      case "Friday":
        price = group * 10.9;
        break;
      case "Saturday":
        price = group * 15.6;
        break;
      case "Sunday":
        price = group * 16;
        break;
    }
  } else {
    switch (dayOfTheWeek) {
      case "Friday":
        price = group * 15;
        break;
      case "Saturday":
        price = group * 20;
        break;
      case "Sunday":
        price = group * 22.5;
        break;
    }
    if (group >= 10 && group <= 20) {
      price = price - price * 0.05;
    }
  }
  console.log(`Total price: ${price.toFixed(2)}`);
}
