# rest-cart - A Vanilla Node.js Shopping Cart API

## Techstack

- Vanilla Node.js

  - uuid, nodemon
  - I chose Vanilla Node.js because I think it's important to know what goes on behind the scenes in frameworks like Express.js

- VS Code

  - Prettier
  - VS Code is my favorite Texteditor/IDE

- MVC file system

  - This is an important concept that is necessary in creating enterprise software

- Postman

  - self-explanatory

## Requires

- Node.js

## Usage

Install dependencies

- `npm install`

Run

- `node server.js`

Or run with nodemon

- `npm run dev`

<br>

| METHOD |                  URL                   |                       USE                       |
| :----: | :------------------------------------: | :---------------------------------------------: |
|  GET   |   http://localhost:3000/api/products   |                gets all products                |
|  GET   | http://localhost:3000/api/products/:id |               gets product by id                |
|  POST  |   http://localhost:3000/api/products   | posts new product if you provide JSON body data |
|  PUT   | http://localhost:3000/api/products/:id |  updates product if you provide JSON body data  |
| DELETE | http://localhost:3000/api/products/:id |              deletes product by id              |

<br>

| METHOD |                URL                 |                      USE                       |
| :----: | :--------------------------------: | :--------------------------------------------: |
|  GET   |   http://localhost:3000/api/cart   |           gets all products in cart            |
| DELETE | http://localhost:3000/api/cart/:id |            deletes product in cart             |
|  POST  | http://localhost:3000/api/cart/:id |       adds product to cart by product id       |
|  PUT   | http://localhost:3000/api/cart/:id | changes quantity attribute with JSON body data |

<br>

### Examples

To post a new product in the products.json, you could:

- POST http://localhost:3000/api/products and add { "id": 5, "description": "hello world" } in the raw JSON body in the request

To change the quantity of a product with the id: 1 in the cart to 7, you could:

- PUT http://localhost:3000/api/cart/1 and add { "quant": 7 } in the raw JSON body in the request

## TODO

- give each cart array a unique id

## Learning Resources

- [Node.js Docs](https://nodejs.org/dist/latest-v14.x/docs/api/)

- [MDN Web Docs](https://developer.mozilla.org/en-US/)

- [Node Cheat Sheet](https://overapi.com/nodejs)

- [Stackoverflow](https://stackoverflow.com/)

- [w3schools](https://www.w3schools.com/nodejs/)

- [Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)

- [freeCodeCamp](https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ)
