import mongoose from "mongoose";

const DepartementSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  image:{
    type:String,
  },
  icon:{
    type:String
  },
  roles: [],
  updated:{
    type:Boolean
  }
}, { timestamps: true });

const Departement = mongoose.models.Departement || mongoose.model("Departement", DepartementSchema);

export default Departement;
