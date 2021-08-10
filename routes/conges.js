const express = require('express');
const router = express.Router();
const congesCtrl = require('../controllers/conges');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', congesCtrl.register);
router.get('/',  congesCtrl.afficher);
//router.get('/', congesCtrl.afficherone);
router.put('/:congesId', congesCtrl.modifier);
router.delete('/:congesId' , congesCtrl.supprimer);


module.exports = router;