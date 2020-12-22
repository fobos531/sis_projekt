require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const routes = require("./routes/");
const cors = require("cors");

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB database!"));

app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.listen(process.env.PORT || 8080, () => console.log("Web server started!"));
