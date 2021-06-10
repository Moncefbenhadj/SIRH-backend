const Promotion = require('../models/promotion');


exports.enregistrerpromo = (req, res, next) => {
    delete req.body._id;
    const promotion = new Promotion({
        ...req.body
    });
    promotion.save()
        .then(() => res.status(201).json({ message: 'Promotion enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};


exports.afficherpromotion = (req, res, next) => {
    Promotion.find()
        .then(promotion => res.status(200).json(promotion))
        .catch(error => res.status(400).json({ error }));
};

exports.afficherpromotionone = (req, res, next) => { 
    Promotion.findOne({_id: req.params.id_employe})
        .then(promotion => res.status(200).json(promotion))
        .catch(error => res.status(400).json({ error }));
};

exports.modifierpromotion = (req, res, next) => {
  Promotion.updateOne({ _id: req.params.id_employe }, { ...req.body })
    .then(() => res.status(200).json({ message: 'Promo modifié !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.supprimerpromotion =(req, res, next) => {
    Promotion.deleteOne({ _id: req.params.id_employe })
      .then(() => res.status(200).json({ message: 'Promotion supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };