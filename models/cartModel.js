let cart = require('../data/cart.json');
const { writeDataToFile } = require('../utils');

function removec(id) {
  return new Promise((resolve, reject) => {
    cart = cart.filter((p) => p.id !== id);
    writeDataToFile('./data/cart.json', cart);
    resolve();
  });
}

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(cart);
  });
}

function findByIdCart(id) {
  return new Promise((resolve, reject) => {
    const productInCart = cart.find((p) => p.id == id);
    resolve(productInCart);
  });
}

function add(product) {
  return new Promise((resolve, reject) => {
    cart.push(product);
    writeDataToFile('./data/cart.json', cart);
    resolve();
  });
}

module.exports = {
  removec,
  findAll,
  findByIdCart,
  add,
};
