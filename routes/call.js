const express = require("express");
const { getToken } = require("../controllers/call");
const { authUser } = require("../middlwares/auth");

const router = express.Router();
router.get("/call/:userId", authUser, getToken);

module.exports = router;
