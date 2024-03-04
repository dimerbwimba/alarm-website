import mongoose from "mongoose";

const ProjetSchema = new mongoose.Schema({
    title: {
        type: String,
      },
      description: {
        type: String,
      },
      startDate: {
        type: String,
      },
      endDate: {
        type: String,
      },
      budget: {
        type: Number,
      },
      status: {
        type: String,
      },
}, { timestamps: true });

const Projet = mongoose.models.Projet || mongoose.model("Projet", ProjetSchema);

export default Projet;
