const mongoose = require('mongoose'); 

const promotionSchema = mongoose.Schema({
dateeffet: { type: Date , required: true },
observation: {type:String , require:true},
document: { type: String, required: false },
id_employe:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employe"
},
id_poste: {type: String, required: false},
created_at:{type: String, required: false},
created_by:{type: String, required: false},
});

module.exports = mongoose.model('Promotion', promotionSchema);