const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");
const path = require("path");

app.use(cors());
app.use(express.json());

// Pick up React index.html file
app.use(express.static(path.join(__dirname, "../build/index.html")));

//import routes
app.get("/", (req, res) => {
  res.send("home");
});

const gameRoute = require("./Routes/gameRouter");
app.use("/gamedata", gameRoute);

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
app.listen(process.env.REACT_APP_PORT || 5400);
