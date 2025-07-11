require('dotenv').config(); 
const express = require('express');
const authRoute = require('./routes/auth-router'); 
const contactRoute = require('./routes/contact-router'); 
const app = express();
const connectDB = require('./utils/db'); 
const errorMiddleware = require('./middlewares/error-middleware');
const PORT = process.env.PORT || 4000;

app.use(express.json());  //middleware to parse JSON bodies

app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);


app.use(errorMiddleware);

connectDB().then(()=> {
    app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    });
});


