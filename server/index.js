const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const usersRoute = require("./routes/users");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  app.use("/server/users", usersRoute);

app.listen("6000",()=>{
    console.log("Backdend is running")
})