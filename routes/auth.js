const express = require("express");
const router = express.Router()

const { login, register } = require("../controllers/auth")

router.route("/register", register)
router.route("/login", login)


module.exports = router