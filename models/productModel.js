const products = require('../data/products.json');
const { v4: uuidv4 } = require('uuid'); //for creating random/unique ids

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id);
    resolve(product);
  });
}

function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4(), ...product }; //creates random id
    products.push(newProduct);
  });
}

module.exports = {
  findAll,
  findById,
  create,
};
