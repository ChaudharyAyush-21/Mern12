const jwt = require('jsonwebtoken');
const User = require('../models/user-model'); 


const authMiddleware = async (req, res, next) => {


    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log("Token from client:", token); 

    if (! token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {

        const isVerified = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        const userData = await User.findOne({ email: isVerified.email }).select({password:0});
        

        req.user = userData;
        req.token = token;
        req.userId = userData._id;
        console.log(userData);
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token',  error: error.message  });
        
    }
    
};

module.exports = authMiddleware;