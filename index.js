const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const app = express();
dotenv.config();
const port = process.env.PORT_SERVER || 3030;
const server = http.createServer(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

server.listen(
  (port,
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
  })
);
