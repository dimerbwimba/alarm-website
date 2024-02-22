import mongoose from "mongoose"

const HeroImagesSchema = new mongoose.Schema({
  url: {
    type: String
  },
}, { timestamps: true })

const HeroImages = mongoose.models.HeroImages || mongoose.model("HeroImages", HeroImagesSchema)

export default HeroImages