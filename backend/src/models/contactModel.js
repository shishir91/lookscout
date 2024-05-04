import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  firstName: String,
  email: String,
  phoneNumber: Number,
  message: String,
}, { timestamps: true });


const contactModel = mongoose.model("contact", contactSchema);

export default contactModel;
