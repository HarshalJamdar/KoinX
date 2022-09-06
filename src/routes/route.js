const express = require("express");
const router = express.Router();
const { getTransaction,getBalance } = require('../controllers/etherController')

router.get('/fetchDetails/:address',getTransaction);

router.get('/getBalance/:address',getBalance);

module.exports = router;