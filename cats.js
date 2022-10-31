function cats(array) {
  let cats = [];

  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  for (let index = 0; index < array.length; index++) {
    let catData = array[index].split(" ");
    let name, age;
    [name, age] = [catData[0], catData[1]];
    cats.push(new Cat(name, age));
  }
  for (const catData of cats) {
    catData.meow();
  }
}
