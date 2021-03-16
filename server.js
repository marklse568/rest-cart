const http = require('http');
const {
  deleteProductFromCart,
  getCart,
  addToCart,
  changeQuantity,
} = require('./controllers/cartController');
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('./controllers/productController');

const server = http.createServer((req, res) => {
  if (req.url === '/api/products' && req.method === 'GET') {
    getProducts(req, res);
  } else if (
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === 'GET'
  ) {
    const id = req.url.split('/')[3]; //api/products/1 (gets the 1)
    getProduct(req, res, id);
  } else if (req.url === '/api/products' && req.method === 'POST') {
    createProduct(req, res);
  } else if (
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === 'PUT'
  ) {
    const id = req.url.split('/')[3];
    updateProduct(req, res, id);
  } else if (
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === 'DELETE'
  ) {
    const id = req.url.split('/')[3];
    deleteProduct(req, res, id);
  } else if (
    req.url.match(/\/api\/cart\/([0-9]+)/) &&
    req.method === 'DELETE'
  ) {
    const id = req.url.split('/')[3];
    deleteProductFromCart(req, res, id);
  } else if (req.url === '/api/cart' && req.method === 'GET') {
    getCart(req, res);
  } else if (req.url.match(/\/api\/cart\/([0-9]+)/) && req.method === 'POST') {
    const id = req.url.split('/')[3];
    addToCart(req, res, id);
  } else if (req.url.match(/\/api\/cart\/([0-9]+)/) && req.method === 'PUT') {
    const id = req.url.split('/')[3];
    changeQuantity(req, res, id);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
