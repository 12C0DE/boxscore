const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

app.use(cors());
app.use(express.json());

//import routes
app.get("/", (req, res) => {
  res.send("home");
});

mongoose
  .connect(process.env.REACT_APP_DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    dbName: process.env.REACT_APP_DB_NAME,
  })
  .then(() => console.log("connected db"))
  .catch((err) => console.error(err));

//listen to the server
app.listen(3001);
