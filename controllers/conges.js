//const conges = require('../models/conges');
const Conges = require('../models/conges');


exports.register = (req, res, next) => {
    delete req.body._id;
    const conges = new Conges({
        ...req.body
    });
    conges.save()
        .then(() => res.status(201).json({ message: 'Congés enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};


exports.afficher = (req, res, next) => {
    Conges.find()
        .then(conges => res.status(200).json(conges))
        .catch(error => res.status(400).json({ error }));
};

// exports.afficherone = (req, res, next) => { 
//     Conges.findOne({_id: req.params.employeId})
//         .then(employe => res.status(200).json(employe))
//         .catch(error => res.status(400).json({ error }));
// };

exports.modifier = (req, res, next) => {
    console.log("objet a modifier",req.body)
  Conges.updateOne({ _id: req.params.congesId }, { ...req.body })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.supprimer =(req, res, next) => {
    Conges.deleteOne({ _id: req.params.congesId })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };