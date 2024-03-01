import mongoose from "mongoose";

const PartenaireSchema = new mongoose.Schema({
    image:{ type: String},
    type_partenaire: {type:String},
    isUpdated:{
        type:Boolean
    },
    name: {type:String},
}, { timestamps: true });

const Partenaire = mongoose.models.Partenaire || mongoose.model("Partenaire", PartenaireSchema);

export default Partenaire;
