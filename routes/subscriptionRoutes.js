const express = require("express")
const { subscribe } = require("../controllers/subscriptionController");
router = express.Router();

router.post("/subscribe", subscribe);

module.exports = router;