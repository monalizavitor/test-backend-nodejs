<h1>Backend Test By Monaliza Vitor</h1>

<h2>To execute</h2>

1. Clone this repository:

`git clone https://github.com/monalizavitor/test-backend-nodejs.git`

2. Download the dependencies and start:

```
  # API
  $ npm install || yarn install
  $ npm start || yarn start

  # CONNECTION WITH DATABASE
  > MONGODB_URI = MONGODB_URI = mongodb://localhost:27017/productManager
  
  
```

<h2>Routes</h2>

Method | Route |	Description |
-----| ------- | --------- |
POST | `localhost:3333/product/create` |	Create a new product.
GET | `localhost:3333/product/all` |	Returns all products
GET | `localhost:3333/product/:id` | Returns product from id.
PUT | `localhost:3333/product/update/:id` |	Update product from id.
DELETE | `localhost:3333/product/delete/:id` |	Delete a product from id. 

<h3>Data structures</h3>

> <strong>Important:</strong> You must paste one of these models to insert in the body of the [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/download/)  to create the firsts Products.

```
[
    {
        "title": "Planner",
        "description": "Bound planner to organize your day / month / year.",
        "price": "R$29,00",
        "category": "stationery"
    },
    {
        "title": "Mouse",
        "description": "Optical mouse.",
        "price": "R$19,00",
        "category": "tecnology"
    },
    {
        "title": "Notebook",
        "description": "16gb de RAM, storage SSD 526gb, and video card 2gb",
        "price": "R$3.599,00",
        "category": "tecnology"
    }
]
```

<h4>Technologies Used</h4>

- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv-safe](https://www.npmjs.com/package/dotenv)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/docs/)
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
