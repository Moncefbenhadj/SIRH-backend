const express = require('express');
const router = express.Router();
const congesCtrl = require('../controllers/conges');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', congesCtrl.register);
router.get('/',  congesCtrl.afficher);
//router.get('/:employeId', congesCtrl.afficherone);
//router.put('/:employeId', congesCtrl.modifier);
//router.delete('/:employeId' , congesCtrl.supprimer);


module.exports = router;