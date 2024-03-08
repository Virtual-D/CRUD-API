const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
    res.send("Welcome to the simple CRUD API!!");
});

mongoose
    .connect(
        "mongodb+srv://<Username>:<Password>.g13nuk9.mongodb.net/CRUD-API?retryWrites=true&w=majority&appName=BackendDB"
    )
    .then(() => {
        console.log("Connected to the database");
        app.listen(port, () => {
            console.log(`Server running on port ${port}.`);
        });
    })
    .catch(() => {
        console.log("Connection failed");
    });
