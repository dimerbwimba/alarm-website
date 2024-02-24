import mongoose from "mongoose"

const CvSchema = new mongoose.Schema({
  image: {
    type: String,
    unique: true ,
  },
  name_cv:{
    type:String
  },
  agent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Agent"
  },
  body: {
    type: String,
  },

}, { timestamps: true })

const Cv = mongoose.models.Cv || mongoose.model("Cv", CvSchema)

export default Cv