const productRoute = require('express').Router();
const ProductController = require('../controllers/product-controller');

productRoute.get('/', ProductController.getProduct);

module.exports = productRoute;