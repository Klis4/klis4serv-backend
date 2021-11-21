import mongoose from 'mongoose';

const Order = new mongoose.Schema( {
    name: {type: String, required: true},
    phone: {type: String, required: true},
    service: {type: String, required: true},
  }

);

export default mongoose.model('Order', Order);