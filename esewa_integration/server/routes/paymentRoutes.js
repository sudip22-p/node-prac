const express = require('express');
const router = express.Router();
const { paymentSuccess, paymentFailure } = require('../controllers/paymentController');

router.post('/success', paymentSuccess);
router.post('/failure', paymentFailure);

module.exports = router;
