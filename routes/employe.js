const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/employe');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', userCtrl.register);
router.get('/',  userCtrl.afficher);

//router.get('/:employeId/promotions',  userCtrl.populate);
router.get('/:employeId', userCtrl.afficherone);

router.put('/:employeId', userCtrl.modifier);
router.delete('/:employeId' , userCtrl.supprimer);

router.get('/promotion/:employeId' , userCtrl.promotion);

router.get('/formation/:employeId' , userCtrl.formation);



module.exports = router;