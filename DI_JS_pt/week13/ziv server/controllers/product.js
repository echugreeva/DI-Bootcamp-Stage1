const {getAllProducts, 
getProduct, getProductByName, insertProduct, updateProduct, deleteProduct} = require('../modules/product.js');

const _getAllProducts = (req, res) => {
    getAllProducts()
    .then(data=>{
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({msg:'not found'})
  })
    
  }
const _getProduct = (req, res) => {
    getProduct(req.params.id)
    .then(data=>{
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({msg:'not found'})
  })
    
  }

  const _getProductByName = (req, res) => {
    getProductByName(req.query.q)
    .then(data=>{
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({msg:'not found'})
  })
    
  }

  const _insertProduct = (req, res) => {
    insertProduct(req.body)
    .then(data=>{
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({msg:'not found'})
  })
    
  }

  const _updateProduct = (req, res) => {
    updateProduct(req.params.id, req.body)
    .then(data=>{
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({msg:'not found'})
  })
    
  }
  const _deleteProduct = (req, res) => {
    deleteProduct(req.params.id)
    .then(data=>{
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({msg:'not found'})
  })
    
  }

  module.exports = {
      _getAllProducts,
      _getProduct,
      _getProductByName,
      _insertProduct,
      _updateProduct,
      _deleteProduct

  }