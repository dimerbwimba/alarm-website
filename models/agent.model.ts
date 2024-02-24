import mongoose from "mongoose"

const AgentSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true ,
  },
  image:{
    type:String
  },
  email: {
    type: String,
  },
  fonction: {
    type: String,
  },
  type_agent:{
    type:String
  }

}, { timestamps: true })

const Agent = mongoose.models.Agent || mongoose.model("Agent", AgentSchema)

export default Agent