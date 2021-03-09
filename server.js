const http = require('http');
const {
  getProducts,
  getProduct,
  createProduct,
} = require('./controllers/productController');

const server = http.createServer((req, res) => {
  if (req.url === '/api/products' && req.method === 'GET') {
    getProducts(req, res);
  } else if (
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === 'GET'
  ) {
    //RegEx
    const id = req.url.split('/')[3]; //api/prodcuts/1 (gets the 1)
    getProduct(req, res, id);
  } else if (req.url === '/api/products' && req.method === 'POST') {
    createProduct(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
