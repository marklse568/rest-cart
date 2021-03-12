const Cart = require('../models/cartModel');
const Product = require('../models/productModel');

//lists all products in cart
//GET /api/cart
async function getCart(req, res) {
  try {
    const productsInCart = await Cart.findAll();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(productsInCart));
  } catch (error) {
    console.log(error);
  }
}

//deletes product in cart by id
//DELETE /api/cart/:id
async function deleteProductFromCart(req, res, id) {
  try {
    const productInCart = await Cart.findByIdCart(id);
    if (!productInCart) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Product Not Found' }));
    } else {
      await Cart.removec(id);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: `Product ${id} deleted` }));
    }
  } catch (error) {
    console.log(error);
  }
}

async function addToCart(req, res, id) {
  try {
    const product = Product.findById(id);
    console.log(product);
    await Cart.add(product);
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: `Product ${id} added to Cart` }));
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getCart,
  deleteProductFromCart,
  addToCart,
};
