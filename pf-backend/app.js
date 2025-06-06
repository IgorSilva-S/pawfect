require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const productRouter = require("./routes/products")
const transactionRouter = require("./routes/transactions");
const cartRouter = require("./routes/cart")
const wishListRouter = require("./routes/wishlist")

const app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", indexRouter);
app.use("/api/user", usersRouter);
app.use("/api/product", productRouter)
app.use("/api/transaction", transactionRouter);
app.use("/api/cart", cartRouter)
app.use("/api/wish", wishListRouter)

module.exports = app;