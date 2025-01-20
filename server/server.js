require('dotenv').config();
const express = require("express");
const app = express();
const router = require("./routes/auth-routes.js");
const contact = require('./routes/contact-routes.js');
const connectDB = require("./utilis/db.js");
const { errorMiddleware } = require('./middlewares/error-middleware.js');
const cors = require('cors');


const corsOptions = {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  };
  
  // Enable CORS with options
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/v1", router);
app.use("/api/v1", contact);

app.use(errorMiddleware);

const PORT = 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at : ${PORT}`);
    }) 
})

