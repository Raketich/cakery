const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http");
const { routes } = require("./src/routes");
const cors = require("cors");

mongoose.connect("mongodb://localhost:27017/candyshop", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes.forEach((item) => {
  app.use(`/${item}`, require(`./src/routes/${item}`));
});

const PORT = process.env.PORT || 4000;
http.createServer({}, app).listen(PORT);
console.log(`server created on ${PORT}`);
