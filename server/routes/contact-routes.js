const express = require('express');
const { contact } = require('../controllers/contact-controller.js');
const { validate } = require('../middlewares/validator-middleware.js');
const { contactSchema } = require('../validator/validator.js');
const router = express.Router();

router.route("/contact").post(validate(contactSchema), contact);

module.exports = router;
