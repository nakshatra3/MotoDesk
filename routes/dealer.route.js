const express = require("express");
const Dealer = require("../models/dealer.model.js");
const router = express.Router();
const {getDealers, getDealer, createDealer, updateDealer, deleteDealer} = require('../controllers/dealer.controller.js');


router.get('/', getDealers);
router.get("/:id", getDealer);

router.post("/", createDealer);

// update a Dealer
router.put("/:id", updateDealer);

// delete a Dealer
router.delete("/:id", deleteDealer);

module.exports = router;