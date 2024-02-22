import mongoose from "mongoose"

const HeroSectionSchema = new mongoose.Schema({
  small_title: {
    type: String
  },
  company_name: {
    type: String
  },
  slogan_title: {
    type: String
  },
  button_title:{
    type:String
  },
  images:[]
}, { timestamps: true })

const HeroSection = mongoose.models.HeroSection || mongoose.model("HeroSection", HeroSectionSchema)

export default HeroSection