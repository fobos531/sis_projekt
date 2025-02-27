require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");
const app = express();
const appCORS = express();
const routes = require("./routes/");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const csrfProtection = csrf({ cookie: true });
const session = require("express-session");

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB database!"));

app.use(
  session({
    secret: "bossica",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true, sameSite: true, maxAge: 600000 },
  })
);

app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use("/api", routes);

app.use(express.static(path.join(__dirname, "/build")));
app.get("*", csrfProtection, (req, res) => {
  res.cookie("XSRF-TOKEN", req.csrfToken());
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

appCORS.use(cors({ origin: "http://172.217.18.78:3000" }));
appCORS.use(express.json());
appCORS.use("/api", routes);

http.createServer(app).listen(8080, () => console.log("HTTP server started on port 8080!"));
http.createServer(appCORS).listen(8081, () => console.log("HTTP server with strict CORS started on port 8081!"));
https
  .createServer(
    {
      key: fs.readFileSync("sis_projekt_selfsigned.key"),
      cert: fs.readFileSync("sis_projekt_selfsigned.crt"),
    },
    app
  )
  .listen(8443, () => console.log("HTTPS server started on port 8443"));
