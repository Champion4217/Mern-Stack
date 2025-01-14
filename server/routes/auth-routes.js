const express = require("express");
const { register, login } = require("../controllers/auth-controller");
const { validate } = require("../middlewares/validator-middleware");
const { signupSchema, loginSchema } = require("../validator/validator");
const router = express.Router();

router.route("/register").post(validate(signupSchema), register);
router.route("/login").post(validate(loginSchema), login);

module.exports = router;