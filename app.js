// import FruitController
const { index, store, update, destroy } = require("./FruitController.js");

// membuat fungsi main
const main = () => {
  // menampilkan semua data
  index();

  // menambah data pisang
  store("Pisang");

  // mengubah data ke 0 menjadi "kelapa"
  update(0, "Kelapa");

  // menghapus data ke 0
  destroy(0);
};

main();
