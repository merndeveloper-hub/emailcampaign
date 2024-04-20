const express = require("express");
const sendEmails = require("./sendEmails/sendEmail.js")
const storage = require("../multer.js");
const multer = require("multer");

const upload = multer({ storage: storage });

const router = express.Router();

router.post("/sendemails", upload.single('file'), sendEmails);


module.exports = router;
