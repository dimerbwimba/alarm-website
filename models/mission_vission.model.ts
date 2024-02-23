import mongoose from "mongoose"

const MissionVisionSchema = new mongoose.Schema({
  title: {
    type: String
  },
  title_description: {
    type: String
  },
  mission_title: {
    type: String
  },
  mission_description:{
    type:String
  },
  vision_title:{
    type:String
  },
  vision_description:{
    type:String
  },
  image:{
    type:String
  },
  video:{
    type:String
  }
}, { timestamps: true })

const MissionVision = mongoose.models.MissionVision || mongoose.model("MissionVision", MissionVisionSchema)

export default MissionVision