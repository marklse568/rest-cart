# rest-cart - A Vanilla Node.js Shopping Cart API

## Techstack

- Vanilla Node.js

  - uuid, nodemon

- VS Code

  - Prettier

- MVC file structure

- Postman

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

- `POST http://localhost:3000/api/products` and add `{ "id": 5, "description": "hello world" }` in the raw JSON body in the request

To change the quantity of a product with the id: 1 in the cart to 7, you could:

- `PUT http://localhost:3000/api/cart/1` and add `{ "quant": 7 }` in the raw JSON body in the request

## Motivation and Thought Process

This project was created as a coding test in the context of an application for an apprentice position.
Overall this is not meant to be an enterprise-ready product but rather a learning experience since I previously had no experience working with JavaScript and Node.js.

### Tech choices:

- Vanilla Node.js
  - I chose Vanilla Node.js because I think it's important to know what goes on behind the scenes in frameworks like Express.js.
- VS Code
  - VS Code is my favorite text editor/IDE and the one I have the most experience with.
- Postman
  - Originally introduced to me by a university professor, this tool is super simple and a must-have for any kind of web development. I especially like that you can open several tabs so you don't have to keep retyping the requests.

### Design choices:

- MVC file structure

  - This was brought up by the interviewer and appeared in several tutorials/courses I followed. It's important to become familiar with best practices and industry standards like this one, so I chose to adapt it in this project.

- utils.js file

  - This is the home of some helper functions that I want to be able to access across the board and that didn't really fit into any controllers or models.

- server.js

  - The constant server ("loop") with a bunch of if/else branches. The interviewer suggested that I might be able to clean this up by adding a routes.js to take care of managing the URL-Mappings and forwarding the requests to the right controllers. However since this is a project meant for learning JavaScript and Node.js I don't think that's necessary and it would (imho) deteriorate the readability of the code (at least for me). It's for the same reason I didn't use any frameworks as mentioned above.

- Data

  - Storing the data in plain .json files was specified as a requirement by the interviewer. For an enterprise-ready product you would most likely use some kind of database like MongoDB or PostgreSQL.

- Architecture
  - I tried to adhere to the MVC file structure as best as I could and the usual ways of interacting with the API could be summarized like this:
    - Request to API is received by server.js --> server.js calls the controller --> controller calls the model --> model resolves something --> controller responds with html code, content-type and usually a message indicating what happened.

### Regrets

- Realizing too late that there needs to be more than one cart, each with a unique id. Implementing this will take some time and might result in having to redo and restructure a ton of stuff.

## TODO

- automatically create different cart arrays and give each a unique id

## Learning Resources

- [Node.js Docs](https://nodejs.org/dist/latest-v14.x/docs/api/)

- [MDN Web Docs](https://developer.mozilla.org/en-US/)

- [Node Cheat Sheet](https://overapi.com/nodejs)

- [Stackoverflow](https://stackoverflow.com/)

- [w3schools](https://www.w3schools.com/nodejs/)

- [Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)

- [freeCodeCamp](https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ)
