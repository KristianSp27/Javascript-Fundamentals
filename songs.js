function songs(array) {
  class Song {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
  }
  let songs = [];
  let numberOfSongs = array.shift();
  let typeSong = array.pop();

  for (let index = 0; index < numberOfSongs; index++) {
    let [type, name, time] = array[index].split("_");
    let song = new Song(type, name, time);
    songs.push(song);
  }
  if (typeSong === "all") {
    songs.forEach((index) => console.log(index.name));
  } else {
    let filtered = songs.filter((index) => index.type === typeSong);
    filtered.forEach((index) => console.log(index.name));
  }
}
