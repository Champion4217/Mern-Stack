require('dotenv').config();
const express = require("express");
const app = express();
const router = require("./routes/auth-routes.js");
const connectDB = require("./utilis/db.js");

app.use(express.json());
app.use("/api/v1", router);


const PORT = 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at : ${PORT}`);
    }) 
})

