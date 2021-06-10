const mongoose = require('mongoose'); 

const employeSchema = mongoose.Schema({
nom: {type:String , require:true},
prenom: { type: String, required: true },
email: { type: String, required: false },
Ntel: { type: String, required: false },
adresse: { type: String, required: false },
sexe: { type: String, required: false },
datenaissance: { type: Date , required: false },
daterecrutement: { type: Date, required: false },
});

module.exports = mongoose.model('Employe', employeSchema);