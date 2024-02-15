const express = require("express");
const server = express();
server.listen(1000);

const bodyParser = require("body-parser");
const cors = require("cors");
// enable cors
server.use(cors());
// including body parser});
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

const indexRouter = require("./routes/index.routes");

server.use("/",indexRouter);