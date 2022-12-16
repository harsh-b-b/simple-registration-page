const mongoose = require("mongoose");

const registration = require("./routes/registration");
const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// configurations for local host connection
// const mongoClient = mongoose.MongoClient;
// let mongoConnUrl = "mongodb://localhost/NewProducts";
// mongoose.connect(mongoConnUrl, { useNewUrlParser: true });
// const db = mongoose.connection;
// db.on("error", function () {
//   console.log("Error came in connectiong");
// });

//configurations for online connection
mongoose
  .connect(
    `mongodb+srv://harsh:harsh143@cluster0.a9ujy9z.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log(`Sucessfully connected to database `);
  })
  .catch((err) => {
    console.log(`Error while connecting to the database and error is :- ${err}`);
  });
app.use(express.static("./front-end"));

app.use(cookieParser());
app.use("/registration", registration);
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./front-end/home.html"));
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
