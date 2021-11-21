import express from "express";
import mongoose from 'mongoose';

const PORT = 5000;

const app = express();
app.use(express.json());

const DB_URL = "mongodb+srv://user:user255255@cluster0.jrvmj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

async function startApp () {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {'Server start at PORT' + PORT});
  } catch (e) {
    console.log(e);
  }
}
