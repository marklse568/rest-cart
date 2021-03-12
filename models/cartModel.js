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

function findById(id) {
  return new Promise((resolve, reject) => {
    const productInCart = cart.find((p) => p.id === id);
    resolve(productInCart);
  });
}

module.exports = {
  removec,
  findAll,
  findById,
};
