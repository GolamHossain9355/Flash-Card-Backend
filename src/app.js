const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const notFoundHandler = require("./errors/notFoundHandler");
const errorHandler = require("./errors/errorHandler");

const decksRouter = require("./decks/decks.router");
const cardsRouter = require("./cards/cards.router");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/decks", decksRouter);
app.use("/cards", cardsRouter);

//Not found handler
app.use(notFoundHandler);
//error handler
app.use(errorHandler);

module.exports = app;
