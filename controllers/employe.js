const Employe = require('../models/employe');


exports.register = (req, res, next) => {
    delete req.body._id;
    const employe = new Employe({
        ...req.body
    });
    employe.save()
        .then(() => res.status(201).json({ message: 'Employé enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};


exports.afficher = (req, res, next) => {
    console.log("controller afficher")
    Employe.find()
        .then(employe => res.status(200).json(employe))
        .catch(error => res.status(400).json({ error }));
};

exports.afficherone = (req, res, next) => { 
    Employe.findOne({_id: req.params.employeId})
        .then(employe => res.status(200).json(employe))
        .catch(error => res.status(400).json({ error }));
};

exports.modifier = (req, res, next) => {
    console.log("objet a modifier",req.body)
  Employe.updateOne({ _id: req.params.employeId }, { ...req.body })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.supprimer =(req, res, next) => {
    Employe.deleteOne({ _id: req.params.employeId })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };