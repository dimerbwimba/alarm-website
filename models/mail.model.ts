import mongoose from "mongoose";

const MailSchema = new mongoose.Schema({
      from: {
        type: String,
        required: true,
      },
      mail:{
        type: String,
        required: true,
      },
      to: {
        type: String,
      },
      subject: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: true,
      },
      read: {
        type: Boolean,
        default: false,
      },
}, { timestamps: true });

const Mail = mongoose.models.Mail || mongoose.model("Mail", MailSchema);

export default Mail;
