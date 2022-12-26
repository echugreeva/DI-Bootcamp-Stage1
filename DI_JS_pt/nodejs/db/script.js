const knex = require('knex');
const db = knex({
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'postgres',
      password : '12345678',
      database : 'dvd_rental'
    }
  });

//   db('country')
//   .select('country_id', 'country')
//   .where({'country_id':48 })
//   .then(rows => {
//       console.log(rows)
//   })
//   .catch(e =>{
//       console.log(e)
//   })

//   db('city')
//   .select('city_id', 'city')
  
//   .then(rows => {
//       console.log(rows)
//   })
//   .catch(e =>{
//       console.log(e)
//   })

  db('country')
  .insert({country:'New Israel 1'})
  .returning('*')
  .then(rows => {
      console.log(rows)
  })
  .catch(e =>{
      console.log(e)
  })