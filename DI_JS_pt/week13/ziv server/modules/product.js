// const products = [
//   {id :1 ,name: 'iPhone', price:800},
//   {id :2 ,name: 'iPad', price:650},
//   {id :3 ,name: 'iWatch', price:750},
// ]

// module.exports = {
//   products
// }
const db = require('../connections/localhost-pg-db');

const getAllProducts = () => { 
  return db('products')
  .select('id','name','price')
}

// knex data base request returns a promise 

const getProduct = (product_id) => {
  return db('products')
  .select('id','name','price')
  .where({ id : product_id} )
}

const getProductByName = (query) => {
  return db('products')
  .select('id','name','price')
  .whereILike('name', `${query}%`)
}


const insertProduct = (new_product) => {
  return db('products')
  .insert(new_product)
  .returning('*')

}

const updateProduct = (product_id, upd_product) => {
  return db('products')
  .update(upd_product)
  .where({ id : product_id})
  .returning('*')

}

const deleteProduct = (product_id) => {
  return db('products')
  .where({ id : product_id})
  .del()
  .returning('*')

}


module.exports = {
  getAllProducts, 
  getProduct,
  getProductByName,
  insertProduct,
  updateProduct,
  deleteProduct
}