const express = require("express");
const router = express.Router();
const { getTransaction, getBalance } = require('../controllers/etherController')


//---FETCHING TRANSACTIONS
router.get('/fetchDetails/:address', getTransaction);


//---FETCHING BALANCE
router.get('/getBalance/:address', getBalance);

module.exports = router;