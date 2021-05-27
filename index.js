const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const ceps = require("./routes/ceps.routes");

require("dotenv/config");

// Isso entraria como
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(morgan("combined"));

// Routes Midleware
app.use("/ceps", ceps);

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Coneccted to DB!");
  }
);

app.listen(8000);
