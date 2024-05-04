import express from "express";
import mongoose from "mongoose";
import contactRoute from "./routes/contactRoute.js";
import "dotenv/config";
import bodyParser from "body-parser";
import cors from "cors"

const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cors({
      origin: "https://lookscout-eight.vercel.app/",
      credentials: true, 
  })
);

app.use("/contact", contactRoute);

app.listen(8000, async () => {
  console.log("Server has started!!! http://localhost:8000");

  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.dcjkise.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("DB Connection Success");
  } catch (err) {
    console.log(err);
  }
});
