const express =require('express');
const homerouter = express.Router();
const homepage = require('../controllers/orgcontroller');
homerouter.route('/').get(homepage);
module.exports = homerouter;
