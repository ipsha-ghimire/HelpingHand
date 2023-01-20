const express =require('express');
const {homepage} = require('../controllers/orgcontroller');
const {adminadd}= require('../controllers/orgcontroller')
const homepagerouter = express.Router();

homepagerouter.route('/').get(homepage);
const adminaddrouter= express.Router();
adminaddrouter.route('/admin').get(adminadd);
module.exports = {homepagerouter,adminaddrouter};
