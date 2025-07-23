const adminMiddleware = (req, res, next) => {
    try {
        const adminRole = req.user.isAdmin;
        if(!adminRole){
            return res.status(403).json({ message: 'Access denied. Admins only.' });
        }
        next();
    } catch (error) {
        next(error);
    }
}
module.exports = adminMiddleware;