const express = require('express');
const router = express.Router();
const {_getAllProducts, _getProduct, _getProductByName, _insertProduct, _updateProduct, _deleteProduct} = require('../controllers/product.js');


router.get('/api/products/search',_getProductByName)
router.get('/api/products', _getAllProducts)
router.get('/api/products/:id', _getProduct)
router.post('/api/products', _insertProduct)
router.put('/api/products/:id', _updateProduct)
router.delete('/api/products/:id', _deleteProduct)


    


  module.exports = router;