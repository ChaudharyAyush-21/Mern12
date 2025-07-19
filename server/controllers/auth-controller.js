const User = require('../models/user-model');
const bcrypt = require('bcryptjs');


// const home = async (req,res) => {
//    try {
//         res.status(200).send('Hello, World! This is the home root route.');
//    } catch (error) {
//        console.error('Error in home controller:', error);
//        res.status(500).send('Internal Server Error');
    
//    }
// };

const register = async (req,res) => {
    try {
            console.log(req.body);

            const {username, email, password, phone } = req.body;

            const userExists = await User.findOne({ email });
            if(userExists) {
                return res.status(400).json({message: 'User already exists'});
            }
            const userCreated = await User.create({username, email, password, phone});
            
            res.status(200).json({msg: userCreated ,token: await userCreated.generateToken(),userId:userCreated._id.toString(),});
    } catch (error) {
        // console.error('Error in register controller:', error);
        // res.status(500).json('Internal Server Error');
        next(error);      //error middleware so that if any error occurs it will be shown in the forntend
        
    }
};

const login = async (req,res) =>{
    try {
        const { email, password } = req.body; 
        const userExists = await User.findOne({ email });
        if(!userExists) {
            return res.status(400).json({message: 'User does not exist'});
        }
        const userCreated = await userExists.comparePassword(password); 
        if(userCreated) {
                res.status(200).json({
                msg: "Login successful",
                token: await userExists.generateToken(),
                userId:userExists._id.toString()});
        }else {
            return res.status(400).json({message: 'Invalid credentials'});
        }
    } catch (error) {
        console.error('Error in login controller:', error);
        res.status(500).json({message: 'Internal Server Error'});
        // next(error);  //error middleware so that if any error occurs it will be shown in the forntend
    }
};

const user = async (req, res) => {
    try {
        const userData = req.user;
        return res.status(200).json({ msg: userData});
        
    } catch (error) {
        console.log(`error from the user route: ${error}`);
        
    }

}

module.exports =  { register , login ,user};