import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  message: String,
});

const contactModel = mongoose.model("contact", contactSchema);

export default contactModel;
