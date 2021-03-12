const Cart = require('../models/cartModel');

async function getCart(req, res) {
  try {
    const productsInCart = await Cart.findAll();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(productsInCart));
  } catch (error) {
    console.log(error);
  }
}

async function deleteProductFromCart(req, res, id) {
  try {
    const productInCart = await Cart.findById(id);
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

module.exports = {
  getCart,
  deleteProductFromCart,
};
