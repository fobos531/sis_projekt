require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");
const app = express();
const appCorsNeDela = express();
const routes = require("./routes/");
const cors = require("cors");

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB database!"));

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use("/api", routes);

appCorsNeDela.use(cors({ origin: "http://172.217.18.78:3000" }));
appCorsNeDela.use(express.json());
appCorsNeDela.use("/api", routes);

const httpServer = http.createServer(app).listen(8080, () => console.log("HTTP server started on port 8080!"));
const httpCorsNeDelaServer = http
  .createServer(appCorsNeDela)
  .listen(8081, () => console.log("HTTP server with strict CORS started on port 8081!"));
const httpsServer = https
  .createServer({ key: fs.readFileSync("sis_projekt_selfsigned.key"), cert: fs.readFileSync("sis_projekt_selfsigned.crt") }, app)
  .listen(8443, () => console.log("HTTPS server started on port 8443"));
