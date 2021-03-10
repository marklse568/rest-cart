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

## Usage

- `node server.js`

or with nodemon

- `npm run dev`

| METHOD |                  URL                   |                       USE                       |
| :----: | :------------------------------------: | :---------------------------------------------: |
|  GET   |   http://localhost:3000/api/products   |                gets all products                |
|  GET   | http://localhost:3000/api/products/:id |               gets product by id                |
|  POST  |   http://localhost:3000/api/products   | posts new product if you provide JSON body data |
|  PUT   | http://localhost:3000/api/products/:id |  updates product if you provide JSON body data  |
| DELETE | http://localhost:3000/api/products/:id |              deletes product by id              |
