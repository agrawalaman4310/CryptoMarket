const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const { header } = require("express-validator");
const dashboardRouter = require("./Routes/Dashboard");
require('dotenv').config();
const app = express();


app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));
app.options("*", cors());
//---------------mongoose connection----------------//

const Connection_url =process.env.MONGO_DB ;
const port = 5001;

  mongoose.connect(Connection_url,()=>{
    console.log("connected to database successfully");
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.json());
app.use("/dashboard", dashboardRouter); 
app.use("/dashboard", require("./Routes/Userdetails"));
app.use("/dashboard", require("./Routes/ProfileUpdate"));

app.use("/register", require("./Routes/CreatUser"));
app.use("/logging", require("./Routes/Login"));

app.use("/transactions", require("./Routes/Transactions"));
app.use("/transactions", require("./Routes/Transactions"));
app.use("/wallet", require("./Routes/Wallet"));
