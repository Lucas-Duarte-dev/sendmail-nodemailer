const express = require('express');

const MailController = require('./controller/MailController')

const routes = express.Router();

routes.get("/sendmail", MailController.sendMail)

module.exports = routes;