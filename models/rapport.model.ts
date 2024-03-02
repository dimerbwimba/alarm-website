import mongoose from "mongoose"

const RapportSchema = new mongoose.Schema({
    file_name:{
        type:String
    },
    full_file_title:{
        type:String
    },
    file_description:{
        type:String
    },
    file_type:{
        type:String
    },
    file_size:{
        type:String
    },
    file_path:{
        type:String
    }

}, { timestamps: true })

const Rapport = mongoose.models.Rapport || mongoose.model("Rapport", RapportSchema)

export default Rapport