# rest-cart

## Stuff I used

- Vanilla Node.js

  - uuid, nodemon

- VSCode

  - Prettier, CLRF

- MVC file system

- Postman

## Requires

- Node.js
- (maybe) nodemon, uuid
  - `(npm i -D nodemon/npm i -D uuid)`

## Usage

- `node server.js`

or with nodemon

- `npm run dev`

GET http://localhost:3000/api/products gets all products

GET http://localhost:3000/api/products/:id gets product by id

POST http://localhost:3000/api/products posts new product if you provide JSON body data
