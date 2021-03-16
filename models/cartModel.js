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

function change(id, productData) {
  return new Promise((resolve, reject) => {
    const index = cart.findIndex((p) => p.id === id);
    cart[index] = { id, ...productData };
    writeDataToFile('./data/cart.json', cart);
    resolve(cart[index]);
  });
}

module.exports = {
  removec,
  findAll,
  findByIdCart,
  add,
  change,
};
