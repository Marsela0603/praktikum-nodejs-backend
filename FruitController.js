// import data fruits
const fruits = require("./fruits.js");

// membuat fungsi index
const index = () => {
  for (const fruit of fruits) {
    console.log(fruit);
  }
};

// membuat fungsi store
const store = (name) => {
  fruits.push(name);
  index();
};

// membuat fungsi update 
const update = (indexToUpdate, newName) => {
  if (indexToUpdate >= 0 && indexToUpdate < fruits.length) {
    fruits[indexToUpdate] = newName;
    index();
  }
};

// membuat fungsi destroy 
const destroy = (indexToDelete) => {
  if (indexToDelete >= 0 && indexToDelete < fruits.length) {
    fruits.splice(indexToDelete, 1);
    index();
  }
};

// export method index dan store
module.exports = { index, store, update, destroy };
