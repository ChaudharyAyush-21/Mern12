const validate = (schema) => async (req, res, next) => {
    try {
        const parsebody = await schema.parseAsync(req.body);
        req.body = parsebody;
        next();
    } catch (err) {
        const status = 422;
        const message = "Dill the input properly";
        const extradetails = err.errors[0].message;

        const error = {
            status,
            message,
            extradetails,
        };

        console.log(error);
        next(error);
        
    //    res.status(400).json({msg: message});
    }
};
module.exports = validate;