// import express and router
const express = require("express");
const router = require("./routes/api");

// buat object express
const app = express();

// menggunakan middleware
app.use(express.json());

// Middleware untuk debugging request body
app.use((req, res, next) => {
    console.log("Request Body:", req.body);
    next();
  });

// menggunakan router
app.use(router);

// mendefinisikan port
app.listen(3000);
