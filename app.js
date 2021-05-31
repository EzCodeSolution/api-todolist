const express = require("express");
const path = require("path")
const flash = require('express-flash')
const session = require('express-session');
const passport = require('passport')
const multer = require('multer');

const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//api v1
const apiv1 = require('./routes/index')
app.use("/api/v1",apiv1.v1)
app.use("/api/v1",apiv1.index)
app.use("/api/v1",apiv1.worklist);

module.exports = app



module.exports = app
