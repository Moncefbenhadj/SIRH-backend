const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/employe');
const auth = require('../middleware/auth');

router.post('/register',auth, userCtrl.register);
router.get('/afficher' , userCtrl.afficher);
router.get('/afficher/:employeId' ,auth, userCtrl.afficherone);
router.put('/modifier/:employeId',auth ,userCtrl.modifier);
router.delete('/supprimer/:employeId',auth ,userCtrl.supprimer);


module.exports = router;
