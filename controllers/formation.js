const Formation = require('../models/formation');


exports.enregistrerformation = (req, res, next) => {
    delete req.body._id;
    const formation = new Formation({
        ...req.body
    });
    formation.save()
        .then(() => res.status(201).json({ message: 'Formation enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};


exports.afficherformation = (req, res, next) => {
    Formation.find()
        .then(formation => res.status(200).json(formation))
        .catch(error => res.status(400).json({ error }));
};

exports.afficherformationone = (req, res, next) => { 
    Formation.findOne({_id: req.params.id_employe})
        .then(formation => res.status(200).json(formation))
        .catch(error => res.status(400).json({ error }));
};

exports.modifierformation = (req, res, next) => {
    Formation.updateOne({ _id: req.params.id_employe }, { ...req.body })
    .then(() => res.status(200).json({ message: 'formation modifié !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.supprimerformation =(req, res, next) => {
    Formation.deleteOne({ _id: req.params.id_employe })
      .then(() => res.status(200).json({ message: 'formation supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };

  