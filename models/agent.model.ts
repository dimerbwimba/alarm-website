import mongoose from "mongoose"
import Cv from "./cv.model";

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

AgentSchema.post('save', async function (doc, next) {
  try {
    console.log("Creating CV for agent:", doc.name);
    await Cv.create({ image:"", agent: doc._id , name_cv:"", html_body:"",json_body:""});
    console.log("CV created successfully for agent:", doc.name);
    next();
  } catch (err:any) {
    console.error("Error creating CV for agent:", doc.name, err);
    next(err);
  }
});

const Agent = mongoose.models.Agent || mongoose.model("Agent", AgentSchema)
// Mongoose middleware to create a profile cv after agent creation

export default Agent