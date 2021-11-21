import express from 'express';
import mongoose from 'mongoose';
import router from './src/Router.js';

const PORT = 5000;

const app = express();
app.use(express.json());
app.use('/api', router);

const DB_URL = 'mongodb+srv://user:user255255@cluster0.jrvmj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';





async function startApp () {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log('Server start at PORT ' + PORT));
  } catch (e) {
    console.log(e);

  }
}

startApp();

// app.post('/', async (req, res) => {
//   const {name, phone, service} = req.body;
//   const order = await Order.create({name, phone, service})
// })