import Users from '../model/usersModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async(req,res)=> {
    const {email, password} = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try{
        await Users.create({
            email:email,
            password:hashPassword
        })
        res.json({msg:'register success'})
    }
    catch(e){
        console.log(e);
        res.status(404).json({msg:'message already exists'})
    }
}
