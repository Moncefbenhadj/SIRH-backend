const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/employe');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', userCtrl.register);
router.get('/',  userCtrl.afficher);
router.get('/:employeId', userCtrl.afficherone);
router.put('/:employeId', userCtrl.modifier);
router.delete('/:employeId' , userCtrl.supprimer);


module.exports = router;