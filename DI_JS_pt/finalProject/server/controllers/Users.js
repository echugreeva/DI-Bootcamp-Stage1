import {register} from '../modules/Users.js'


export const _register = (req, res) => {
    console.log(req.body);
    register(req.body)
    .then(data=>{
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({msg:'not found'})
  })
    
  }