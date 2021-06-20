const mongoose = require('mongoose'); 

const congesSchema = mongoose.Schema({
nom: {type:String , require:true},
prenom: { type: String, required: true },
duree: { type: Number, required: false },
datedebutconges: { type: Date , required: false },
datefinconges: { type: Date, required: false },
observation: {type: String, required:false}
 });

module.exports = mongoose.model('Conges', congesSchema);