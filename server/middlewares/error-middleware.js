const errorMiddleware = (err, req, res, next) =>{
    const status = err.status || 500 ;
    const message = err.message || "Backend Error";
    const extradetails = err.extradetails || "error from Bakend";

    return res.status(status).json({
        message,
        extradetails
    });
};

module.exports = errorMiddleware;