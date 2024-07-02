const express = require("express");
const cors = require("cors");
const { errorHandler } = require("./middlewares/error");

const app = express();


app.use(cors());
app.options("*", cors()); 

app.use(express.json());

const videoRoutes = require("./routes/video.routes.js");

app.use("/v1", videoRoutes);

app.use(errorHandler);

module.exports = app;