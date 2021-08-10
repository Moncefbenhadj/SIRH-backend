const Employe = require('../models/employe');
const Promotion = require('../models/promotion');
const Formation = require('../models/formation');



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

  exports.populate = (req, res, next) => {
    Promotion.find({id_employe: req.params.employeId})
        .then(promotions => res.status(200).json(promotions))
        .catch(error => res.status(400).json({ error }));
};

    exports.promotion = (req, res, next) => { 
        Promotion.find({ id_employe: req.params.employeId })
        .then(promotions => res.send(promotions))
        .catch(error => res.status(400).json({ error }));
};

    exports.formation = (req, res, next) => { 
    Formation.find({ id_employe: req.params.employeId })
    .then(formation => res.send(formation))
    .catch(error => res.status(400).json({ error }));
};