const express = require("express");
const mongoose = require("mongoose");
const Dealer = require("./models/dealer.model.js");
const dealerRoute = require("./routes/dealer.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/dealers_info", dealerRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
  .connect(
    "mongodb+srv://nakshatra4585:V3kE48RuIIODCzgr@cluster0.opjyg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
