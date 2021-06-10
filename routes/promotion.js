const express = require('express');
const router = express.Router();
const promotionCtrl = require('../controllers/promotion');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/enregistrerpromo', promotionCtrl.enregistrerpromo);
router.get('/afficherpromo',  promotionCtrl.afficherpromotion);
router.get('/afficherpromo/:id_employe', authMiddleware, promotionCtrl.afficherpromotionone);
router.put('/modifierpromotion/:id_employe', authMiddleware, promotionCtrl.modifierpromotion);
router.delete('/supprimerpromotion/:id_employe' , promotionCtrl.supprimerpromotion);


module.exports = router;