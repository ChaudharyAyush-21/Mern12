require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/auth-router'); 
const contactRoute = require('./routes/contact-router'); 
const app = express();
const connectDB = require('./utils/db'); 
const errorMiddleware = require('./middlewares/error-middleware');
const PORT = process.env.PORT || 4000;

const corsoptions = {
    origin:"http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}

app.use(cors(corsoptions)); //middleware to enable CORS
app.use(express.json());  //middleware to parse JSON bodies

app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);


app.use(errorMiddleware);

connectDB().then(()=> {
    app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    });
});


