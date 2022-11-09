import Users from '../model/usersModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async(req,res)=> {
    const {email, password} = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try{
        await Users.create({
            email:email.toLowerCase(),
            password:hashPassword
        })
        res.json({msg:'register success'})
    }
    catch(e){
        console.log(e);
        res.status(404).json({msg:'message already exists'})
    }
}

export const login = async(req,res)=> {
    
    try {
        const user = await Users.findAll({
            where: {
                email:req.body.email.toLowerCase()
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(!match) return res.status(400).json({msg:'wrong password'});

        const userId = user[0].id;
        const email = req.body.email;

        const accessToken = jwt.sign({userId,email}, process.env.ACCESS_TOKEN_SECRET,
               {expiresIn:'60s'})

        res.cookie('accessToken', accessToken, {
            httpOnly:true,
            maxAge: 60*1000
        });

        res.json({token: accessToken})

        
    }
    catch(e){
        console.log(e);
        res.status(404).json({msg:'email not found'})
    }
}

//getting users list for authorized admin

export const getUsers  = async(req,res)=> {
    
    try {
        const users = await Users.findAll(
            {
                attributes:['id', 'email']
            }
        );

        res.json(users)

        
    }
    catch(e){
        console.log(e);
        res.status(404).json({msg:'not found'})
    }
}

export const logout  = (req,res)=> {
    
    const accessToken = req.cookies.accessToken;
    console.log(accessToken);
    if(!accessToken) return res.status(204).json({msg:'cleared'});
    res.clearCookie('accessToken');
    console.log(req.cookies.accessToken)
    return res.status(200).json({msg:'cleared'})

}

