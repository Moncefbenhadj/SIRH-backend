const express = require('express');
const router = express.Router();
const formationCtrl = require('../controllers/formation');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', formationCtrl.enregistrerformation);
router.get('/',  formationCtrl.afficherformation);
router.get('/:id_employe', formationCtrl.afficherformationone);
router.put('/:id_employe', authMiddleware, formationCtrl.modifierformation);
router.delete('/:id_employe' , formationCtrl.supprimerformation);


module.exports = router;