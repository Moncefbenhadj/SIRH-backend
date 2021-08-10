const express = require('express');
const router = express.Router();
const promotionCtrl = require('../controllers/promotion');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', promotionCtrl.enregistrerpromo);
router.get('/',  promotionCtrl.afficherpromotion);

router.get('/:id_employe', promotionCtrl.afficherpromotionone);
router.put('/:id_employe', authMiddleware, promotionCtrl.modifierpromotion);
router.delete('/:id_employe' , promotionCtrl.supprimerpromotion);


module.exports = router;